"""Extract body text from an Apple Pages (.pages) file without external libraries.

.pages is a zip containing Index/*.iwa files. Each .iwa is a sequence of chunks:
1 byte type (0) + 3 byte little-endian length + Snappy-compressed payload (no framing CRC).
The decompressed data is protobuf; document text lives in long length-delimited UTF-8 fields.
"""
import sys, zipfile, re


def snappy_decompress(buf):
    # read varint uncompressed length
    i, shift, n = 0, 0, 0
    while True:
        b = buf[i]; i += 1
        n |= (b & 0x7F) << shift
        if b < 0x80: break
        shift += 7
    out = bytearray()
    while i < len(buf):
        tag = buf[i]; i += 1
        t = tag & 3
        if t == 0:  # literal
            ln = tag >> 2
            if ln >= 60:
                nb = ln - 59
                ln = int.from_bytes(buf[i:i + nb], 'little'); i += nb
            ln += 1
            out += buf[i:i + ln]; i += ln
        else:
            if t == 1:
                ln = ((tag >> 2) & 7) + 4
                off = ((tag >> 5) << 8) | buf[i]; i += 1
            elif t == 2:
                ln = (tag >> 2) + 1
                off = int.from_bytes(buf[i:i + 2], 'little'); i += 2
            else:
                ln = (tag >> 2) + 1
                off = int.from_bytes(buf[i:i + 4], 'little'); i += 4
            start = len(out) - off
            for k in range(ln):
                out.append(out[start + k])
    return bytes(out)


def iwa_payload(data):
    out, i = bytearray(), 0
    while i + 4 <= len(data):
        ln = int.from_bytes(data[i + 1:i + 4], 'little')
        out += snappy_decompress(data[i + 4:i + 4 + ln])
        i += 4 + ln
    return bytes(out)


def varint(b, i):
    n = shift = 0
    while True:
        x = b[i]; i += 1
        n |= (x & 0x7F) << shift
        if x < 0x80: return n, i
        shift += 7


def strings(b, min_len=40):
    """Scan for protobuf length-delimited fields that decode as long UTF-8 text."""
    found, i = [], 0
    while i < len(b) - 2:
        key = b[i]
        if key & 7 == 2 and key >> 3 >= 1:
            try:
                ln, j = varint(b, i + 1)
                if min_len <= ln <= len(b) - j:
                    s = b[j:j + ln].decode('utf-8')
                    if sum(c.isalpha() for c in s) > ln * 0.4 and '\x00' not in s:
                        found.append(s); i = j + ln; continue
            except Exception:
                pass
        i += 1
    return found


def extract(path):
    texts = []
    with zipfile.ZipFile(path) as z:
        for name in sorted(z.namelist()):
            if name.startswith('Index/Document') and name.endswith('.iwa'):
                texts += strings(iwa_payload(z.read(name)))
    best = max(texts, key=len) if texts else ''
    return best.replace(' ', '\n').replace(' ', '\n')


if __name__ == '__main__':
    for p in sys.argv[1:]:
        print('=' * 20, p.split('/')[-1])
        print(extract(p))
