import { Product } from "@/types/ProductType";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function getProducts(): Promise<Product[]> {
  const products = await stripe.products.list();
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
      });

      return {
        id: product.id,
        price: price.data[0].unit_amount || 0,
        name: product.name,
        image: product.images[0],
        description: product.description || "",
        currency: price.data[0].currency,
        quantity: 0,
      };
    })
  );

  return formatedProducts;
}

export async function getProduct(id: string): Promise<Product> {
  const product = await stripe.products.retrieve(id);
  const price = await stripe.prices.list({
    product: product.id,
  });

  return {
    id: product.id,
    price: price.data[0].unit_amount || 0,
    name: product.name,
    image: product.images[0],
    description: product.description || "",
    currency: price.data[0].currency,
  };
}
