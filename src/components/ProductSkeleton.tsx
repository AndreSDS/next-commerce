import { Skeleton } from "./ui/skeleton";

export function ProductSkeleton() {
  const items = Array.from({ length: 8 });

  return (
    <Skeleton className="max-w-7xl mx-auto pt-8 px-8 xl:px-0 bg-slate-800">
      <Skeleton className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        {items.map((_, index) => (
          <Skeleton
            key={index}
            className="rounded-lg border bg-slate-800 shadow-lg h-96 flex flex-col text-gray-300"
          />
        ))}
      </Skeleton>
    </Skeleton>
  );
}
