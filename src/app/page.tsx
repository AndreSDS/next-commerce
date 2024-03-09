import { ProductCard } from "@/components/Product";
import { Product } from "@/types/ProductType";
import Image from "next/image";
import Stripe from "stripe";

async function getData(): Promise<Product[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

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
      };
    })
  )

  return formatedProducts;
}

export default async function Home() {
  const products = await getData();
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
