"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/ProductType";
import { ProductImage } from "./ProductImage";
import { formatCurrency } from "@/lib/utils";
import { AddToCartButton } from "./AddToCartButton";
import Link from "next/link";

type ProductProps = {
  product: Product;
};

export function ProductCard({ product }: ProductProps) {
  const { id, name, price, description, image } = product;
  const formattedPrice = formatCurrency(price);
  return (
    <Link href={`/product/${id}`}>
      <Card className="flex flex-col text-gray-300">
        <CardContent className="flex flex-col flex-1">
          <div className="relative flex-1">
            <ProductImage fill={!image} src={image} title={name} />
          </div>

          <CardHeader className="flex-row space-y-0 items-center justify-between">
            <CardTitle className="w-40 truncate">{name}</CardTitle>
            <CardDescription className="text-sm font-bold text-teal-300">
              {formattedPrice}
            </CardDescription>
          </CardHeader>
        </CardContent>
        <CardFooter>
          <AddToCartButton product={product} />
        </CardFooter>
      </Card>
    </Link>
  );
}
