import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Cart } from "./Cart";

export const Navbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      {...props}
      className={cn(
        "fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300",
        className
      )}
    >
      <Link
        className="uppercase font-bold text-md h-12 flex items-center"
        href="/"
      >
        Next Store
      </Link>

      <div className="flex items-center gap-8">
        <Cart />
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton mode="modal">
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};
