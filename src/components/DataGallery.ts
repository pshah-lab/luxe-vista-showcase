console.log("Cloudinary Base:", import.meta.env.VITE_CLOUDINARY_BASE);
const CLOUDINARY_BASE = import.meta.env.VITE_CLOUDINARY_BASE;

export const galleryImages = [
  { src: `${CLOUDINARY_BASE}yalf81glm2xokijtumrk.webp`, category: "Aerial View" },
  { src: `${CLOUDINARY_BASE}lqcnndttfdgi9opag61t.webp`, category: "Architecture" },
  { src: `${CLOUDINARY_BASE}rxrlvuioae3haeury6vk.webp`, category: "Architecture" },
  { src: `${CLOUDINARY_BASE}tqukyysxnetyzatrw22e.webp`, category: "Architecture" },
  { src: `${CLOUDINARY_BASE}acfdgjcqdxwpyzthmyt7.webp`, category: "Architecture" },
  { src: `${CLOUDINARY_BASE}z4bxoy8cmh1pvtixkibc.webp`, category: "Entertainment" },
  { src: `${CLOUDINARY_BASE}iuuzegerddijfpadwrgw.webp`, category: "Bedroom" },
  { src: `${CLOUDINARY_BASE}cuosjw2kems04eqoiprw.webp`, category: "Dining" },
  { src: `${CLOUDINARY_BASE}kxq4luxncxkaimemdy3h.webp`, category: "Recreation" },
  { src: `${CLOUDINARY_BASE}amrg9ckl3nqs0jpqjqyf.webp`, category: "Entryways" },
  { src: `${CLOUDINARY_BASE}ncx4mhgjd0hkwfvnfd1c.webp`, category: "Entryways" },
  { src: `${CLOUDINARY_BASE}rpm9hietsnxhkcx1p252.webp`, category: "Entryways" },
  { src: `${CLOUDINARY_BASE}ufpjpg6qexriljmss7ui.webp`, category: "Exterior" },
  { src: `${CLOUDINARY_BASE}nco64gbv2gghwglqgbsh.webp`, category: "Exterior" },
  { src: `${CLOUDINARY_BASE}l5z7cxfch031ubos0twr.webp`, category: "Exterior" },
  { src: `${CLOUDINARY_BASE}xbbsgex573ftocnuodwy.webp`, category: "Bungalow" },
  { src: `${CLOUDINARY_BASE}y36p2dy83sycmyk1hlll.webp`, category: "Bungalow" },
  { src: `${CLOUDINARY_BASE}vg7eywbchhlizofs34zo.webp`, category: "Recreation" },
  { src: `${CLOUDINARY_BASE}dijnkqrl5oaebd21hrla.webp`, category: "Recreation" },
  { src: `${CLOUDINARY_BASE}zw2m5s917fmhvgmrlpiw.webp`, category: "Gardens" },
  { src: `${CLOUDINARY_BASE}uyhwkb1mfyek1yue6hdn.webp`, category: "Gardens" },
  { src: `${CLOUDINARY_BASE}bxmmok5xnszzo4ebbqte.webp`, category: "Amenities" },
  { src: `${CLOUDINARY_BASE}eafdrtwr7hpgcm9p02vz.webp`, category: "Entertainment" },
  { src: `${CLOUDINARY_BASE}twsfxcrsuixq7uvykije.webp`, category: "Entertainment" },
  { src: `${CLOUDINARY_BASE}hhssydt1unn2gfhx5lnx.webp`, category: "Common Areas" },
  { src: `${CLOUDINARY_BASE}tjgyktkseilak3fradvn.webp`, category: "Common Areas" },
  { src: `${CLOUDINARY_BASE}jg1aimsr3z1ofhkcy9y3.webp`, category: "Pool" }
];

export const categories = [
  "All",
  "Aerial View",
  "Architecture",
  "Balcony",
  "Bedroom",
  "Bungalow",
  "Common Areas",
  "Dining",
  "Entertainment",
  "Entryways",
  "Exterior",
  "Gardens",
  "Pool",
  "Recreation"
];