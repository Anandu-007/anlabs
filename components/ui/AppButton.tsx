import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface AppButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function AppButton({
  children,
  variant = "primary",
}: AppButtonProps) {
  if (variant === "secondary") {
    return (
      <Button
        variant="outline"
        className="h-12 rounded-xl border-zinc-700 bg-transparent px-6 hover:bg-zinc-900"
      >
        {children}
      </Button>
    );
  }

  return (
    <Button className="h-12 rounded-xl bg-white px-6 text-black hover:bg-zinc-200">
      {children}
    </Button>
  );
}