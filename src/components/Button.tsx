import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type PrimaryButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
};

export function PrimaryButton({
  className = "",
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center rounded-full bg-electric-iris px-4 py-3.5 text-[14px] font-semibold uppercase tracking-[0.025em] text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostButton({
  className = "",
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center text-[14px] font-normal text-ash-gray transition-colors hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}
