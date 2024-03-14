import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductImage } from "@/components/ProductImage";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/stripe";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <>
      <Link href="/">Voltar para loja</Link>

      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-10">
        <ProductImage src={product.image} title={product.name} />

        <div className="flex flex-col">
          <div className="pb-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <h2 className="text-xl text-teal-600 fon-bold">
              {formatCurrency(product.price)}
            </h2>
          </div>
          <div className="pb-4">
            <p className="text-sm">{product.description}</p>
          </div>
          <div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
