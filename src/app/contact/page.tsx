import Image from "next/image";
import { MainLayout } from "@/layouts";
import { Hero, SocialIcons, OpeningHours } from "@/components";
import { MdPhone, MdLocationPin, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <MainLayout>
      <Hero title="Contact us" shrink />
      <div className="container mx-auto px-4 py-16 sm:py-28 max-w-[900px]">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:w-72 flex flex-col gap-10">
            <div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 text-xl text-yellow-500">
                  <MdPhone />
                </div>
                <h3 className="text-lg mb-2">Phone number</h3>
              </div>
              <p className="text-sm">+1 (111) 111-1111</p>
            </div>
            <div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 text-xl text-yellow-500">
                  <MdLocationPin />
                </div>
                <h3 className="text-lg mb-2">Address</h3>
              </div>
              <address className="text-sm">
                <p>Suite 709 60944 Gislason Road</p>
                <p>Raulbury, FL 90795-4513</p>
              </address>
            </div>
            <div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 text-xl text-yellow-500">
                  <MdEmail />
                </div>
                <h3 className="text-lg mb-2">Email</h3>
              </div>
              <p className="text-sm">mybakery@example.com</p>
            </div>
            <div>
              <OpeningHours headingClassName="mb-2" />
            </div>
            <div>
              <SocialIcons headingClassName="mb-2" />
            </div>
          </div>
          <div className="flex-1 flex justify-end self-start">
            <Image 
              src="/assets/images/bakery.jpg"
              width={500}
              height={666}
              alt="Bakery"
              priority
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};