import galeriaData from '../files/galeria.json';

export interface GalleryImage {
  thumb: string;
  full: string;
  alt?: string;
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  // Transform the data structure from galeria.json
  const images = galeriaData?.zdjecia?.zdjecie || [];
  return images.map((item: any, index: number) => ({
    thumb: item.miniatura?._text || `thumb-${index}`,
    full: item.powiekszone?._text || `full-${index}`,
    alt: `Gallery image ${index + 1}`
  }));
}
