import { MainLayout } from "@/layouts";
import { Hero, OurProducts } from "@/components";

export default function Products() {
  return (
    <MainLayout>
      <Hero title="Products" shrink />
      <OurProducts
        title="Check out products"
        products={[
          {
            src: "/assets/images/baguette.jpg",
            alt: "Baguette",
            title: "Baguette",
            category: "Bread",
          },
          {
            src: "/assets/images/croissants.jpg",
            alt: "Croissant",
            title: "Croissant",
            category: "Pastry",
          },
          {
            src: "/assets/images/cookies.jpg",
            alt: "Cookies",
            title: "Cookies",
            category: "Snacks",
          },
          {
            src: "/assets/images/bread_2.jpg",
            alt: "Challah",
            title: "Challah",
            category: "Bread",
          },
          {
            src: "/assets/images/bread_3.jpg",
            alt: "Sourdough",
            title: "Sourdough",
            category: "Bread",
          },
          {
            src: "/assets/images/bread_4.jpg",
            alt: "Seed Bread",
            title: "Seed Bread",
            category: "Bread",
          },
          {
            src: "/assets/images/bread_5.jpg",
            alt: "Bagel",
            title: "Bagel",
            category: "Bread",
          },
        ]}
      />
    </MainLayout>
  );
};