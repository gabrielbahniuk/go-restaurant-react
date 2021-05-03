export type IFood = {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
};

export type IFoodProps = Omit<IFood, 'id' | 'available'>;
