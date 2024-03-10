"use client";

import { useCartStore } from "@/store/store";
import { Button } from "./ui/button";
import { Product } from "@/types/ProductType";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addProduct } = useCartStore();

  return (
    <Button onClick={() => addProduct(product)}>Adicionar ao Carrinho</Button>
  );
}
