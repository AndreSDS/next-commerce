export type Product = {
  id: string;
  price: number;
  name: string;
  image: string;
  quantity?: number | 1;
  description: string;
  currency?: string;
};