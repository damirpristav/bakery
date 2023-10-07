import { MainLayout } from "@/layouts";
import { Hero, AboutUs, OurProducts } from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="Bakery"
        subtitle="Fresh bread daily"
        showLink
        linkText="Contact us"
        linkTo="/contact"
      />
      <AboutUs short />
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
        ]}
        showButton
        darkVersion
      />
    </MainLayout>
  );
}
