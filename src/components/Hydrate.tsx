"use client";

import { ReactNode, useEffect, useState } from "react";

type HydrateProps = {
  children: ReactNode;
};

export function Hydrate({ children }: HydrateProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <>{children}</> : <span>Carregando...</span>;
}
