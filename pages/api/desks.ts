const desks = [
  {
    id: 1,
    name: 'L-Shaped Desk',
    image: '/desk1.jpg',
    description:
      'This L-shaped desk is perfect for those who need extra space for their work and computer set up.',
    price: 299.99,
  },
  {
    id: 2,
    name: 'Standing Desk',
    image: '/desk2.jpg',
    description:
      'This standing desk allows you to adjust the height, to switch between sitting and standing throughout the day.',
    price: 399.99,
  },
  {
    id: 3,
    name: 'Corner Desk',
    image: '/desk3.jpg',
    description:
      'This corner desk is designed to fit in any corner of your room, making the most of your space.',
    price: 199.99,
  },
];

export const getDesks = () => {
  return desks;
};

export const getDesk = (id: number) => {
  return desks[id];
};
