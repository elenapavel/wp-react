export type CreatorType = {
  id: number;
  avatar: string;
  name: string;
  description: string;
};

export const data: CreatorType[] = [
  {
    id: 1,
    avatar: "http://wp-react.local/wp-content/uploads/2024/09/Asset-4@4x.png",
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque ut fermentum nulla, vel ultrices arcu",
  },
  {
    id: 2,
    avatar: "http://wp-react.local/wp-content/uploads/2024/09/Asset-8@4x.png",
    name: "John Doe",
    description:
      "Nunc nisl leo, congue eget sem vel, sodales cursus massa.Integer iaculis velit eu turpis egestas feugiat ut non elit.",
  },
  {
    id: 3,
    avatar: "http://wp-react.local/wp-content/uploads/2024/09/Asset-6@4x.png",
    name: "Margot Robbie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Quisque ut fermentum nulla, vel ultrices arcu. Nunc nisl leo,congue eget sem vel, sodales cursus massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Quisque ut fermentum nulla, vel ultrices arcu. Nunc nisl leo,congue eget sem vel, sodales cursus massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Quisque ut fermentum nulla, vel ultrices arcu. Nunc nisl leo,congue eget sem vel, sodales cursus massa.",
  },
];
