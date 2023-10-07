import { ReactNode } from "react";
import { Header, Footer } from "@/components";

export function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

interface Props {
  children?: ReactNode;
}