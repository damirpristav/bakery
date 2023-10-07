import { MainLayout } from "@/layouts";
import { Hero, AboutUs } from "@/components";

export default function About() {
  return (
    <MainLayout>
      <Hero title="About us" shrink />
      <AboutUs />
    </MainLayout>
  );
};