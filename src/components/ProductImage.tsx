"use client";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type ProductImageProps = {
  src: string;
  title: string;
  fill?: boolean;
};

export function ProductImage({ src, fill, title }: ProductImageProps) {
  const [loagind, setLoading] = useState(true);

  return fill ? (
    <Skeleton className="h-full w-full rounded-xl" />
  ) : (
    <Image
      className="object-contain max-w-[200px] max-h-[250px] rounded-xl"
      src={src}
      alt={title}
      width={200}
      height={400}
    />
  );
}
