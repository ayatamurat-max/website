// Muayenehane iletişim bilgileri: tek yerden yönetilir.
export const CLINIC = {
  name: 'Op. Dr. Murat Ayata Muayenehanesi',
  addressLine: 'Karacaibrahim Mahallesi, Dereüstü Sokak No:11/30, Saranta İş Merkezi, Kırklareli Merkez, Kırklareli, Türkiye',
  phoneDisplay: '+90 555 333 21 20',
  phoneTel: '+905553332120',
  whatsapp: '905553332120',
  email: 'info@muratayata.com',
};

// Harita, koordinat yerine açık adrese göre aranır
const mapsQuery = encodeURIComponent('Saranta İş Merkezi, Dereüstü Sokak No:11, Karacaibrahim, Kırklareli');

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${mapsQuery}&z=17&output=embed`;
export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
