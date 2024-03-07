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

type ProductProps = {
  product: Product;
};

export function ProductCard({ product }: ProductProps) {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <Card className="flex flex-col text-gray-300">
      <CardContent className="flex flex-col flex-1">
        <div className="relative max-h-72 flex-1">
          img
        </div>

        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </CardContent>
      <CardFooter>
        <Button>Adicionar ao Carrinho</Button>
      </CardFooter>
    </Card>
  );
}
