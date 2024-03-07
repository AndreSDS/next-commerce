import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/ProductType";
import { Button } from "./ui/button";
import { ProductImage } from "./ProductImage";

type ProductProps = {
  product: Product;
};

export function ProductCard({ product }: ProductProps) {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <Card className="flex flex-col text-gray-300">
      <CardContent className="flex flex-col flex-1">
        <div className="relative flex-1">
          <ProductImage fill={!image} src={image} title={title} />
        </div>

        <CardHeader className="flex-row space-y-0 items-center justify-between">
          <CardTitle className="w-40 truncate">{title}</CardTitle>
          <CardDescription className="text-sm font-bold text-teal-300">{price}</CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter>
        <Button>Adicionar ao Carrinho</Button>
      </CardFooter>
    </Card>
  );
}
