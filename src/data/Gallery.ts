export type GalleryType = {
  img: string;
};

const GalleryData = [
  {
    img: '/img/gallery/gallery-1.jpg',
  },
  {
    img: '/img/gallery/gallery-2.jpg',
  },
  {
    img: '/img/gallery/gallery-3.jpg',
  },
  {
    img: '/img/gallery/gallery-4.jpg',
  },
  {
    img: '/img/gallery/gallery-5.jpg',
  },
  {
    img: '/img/gallery/gallery-6.jpg',
  },
  {
    img: '/img/gallery/gallery-7.jpg',
  },
  {
    img: '/img/gallery/gallery-8.jpg',
  },
  {
    img: '/img/gallery/gallery-9.jpg',
  },
  {
    img: '/img/gallery/gallery-10.jpg',
  },
  {
    img: '/img/gallery/gallery-11.jpg',
  },
  {
    img: '/img/gallery/gallery-12.jpg',
  },
];

export const getGalleryData = (): GalleryType[] => {
  return GalleryData;
};
