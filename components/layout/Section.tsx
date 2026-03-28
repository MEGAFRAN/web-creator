"use client";
import { ReactNode } from "react";

const bgMap = { white: "bg-white", gray: "bg-gray-50", dark: "bg-gray-900" };
const pyMap = { none: "", sm: "py-8", md: "py-12", lg: "py-20", xl: "py-28" };

export function Section({
  children,
  background = "white",
  paddingY = "lg",
}: {
  children?: ReactNode;
  background?: keyof typeof bgMap | null;
  paddingY?: keyof typeof pyMap | null;
}) {
  return (
    <section className={`w-full ${bgMap[background ?? "white"]} ${pyMap[paddingY ?? "lg"]}`}>
      {children}
    </section>
  );
}
