"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCartStore } from "@/store/store";
import Image from "next/image";
import { PlusIcon, MinusIcon, Trash2Icon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export function Cart() {
  const { cart, removeProduct, increaseQuantity, decreaseQuantity, clearCart } =
    useCartStore();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="cursor-pointer">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>

          <Badge className="absolute bg-teal-600 -top-2 -right-4">
            {cart.length}
          </Badge>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b pb-4 mb-4 border-gray-400">
          <DrawerTitle className="text-slate-300">Meu Carrinho</DrawerTitle>
        </DrawerHeader>

        {cart.length === 0 ? (
          <DrawerDescription className="text-center">
            <p className="text-slate-300">Seu carrinho está vazio.</p>

            <Link className="mt-4 text-teal-600 text-md font-bold" href="/">
              Continue comprando
            </Link>
          </DrawerDescription>
        ) : (
          <>
            {cart.map((product) => (
              <div className="flex gap-4 py-4 w-full" key={product.id}>
                <Image
                  className="object-cover w-24"
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={120}
                />
                <div className="flex items-center justify-between w-full">
                  <h2 className="w-42 truncate">{product.name}</h2>

                  <div className="flex items-center">
                    <Button
                      onClick={() => increaseQuantity(product.id)}
                      variant="outline"
                      size="icon"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                    <span>{product.quantity}</span>
                    <Button
                      onClick={() => decreaseQuantity(product.id)}
                      variant="outline"
                      size="icon"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-teal-600 text-sm font-bold">
                    {formatCurrency(product.price)}
                  </p>

                  <Button
                    onClick={() => removeProduct(product.id)}
                    variant="destructive"
                    size="icon"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <DrawerFooter>
              <Button>Submit</Button>
              <Button onClick={clearCart} variant="destructive">
                Clear Cart
              </Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
