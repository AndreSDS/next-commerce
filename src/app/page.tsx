import { Product } from "@/types/ProductType";
import Image from "next/image";

async function getData(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data from the API");
  }

  const json = await res.json();
  return json;
}

export default async function Home() {
  const products = await getData();
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        {products.map(
          ({ id, title, price, description, category, image, rating }) => (
            <div key={id}>
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                objectFit="cover"
              />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-gray-500">{description}</p>
              <p className="text-gray-500">{category}</p>
              <p className="text-gray-500">{price}</p>
              <p className="text-gray-500">{rating.rate}</p>
              <p className="text-gray-500">{rating.count}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
