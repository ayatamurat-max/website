// JSON-LD bloğunu sayfaya gömer. İçerik sadece kendi ürettiğimiz nesnelerden gelir.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
