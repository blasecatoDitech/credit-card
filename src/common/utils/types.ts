export type TypeProduct = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type TypeOrders = {
  product: TypeProduct;
  amount: number;
};
