"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdDoneOutline } from "react-icons/md";

const features = ["Fresh", "Organic", "Lorem", "Ipsum"];

export function AboutUs({ short }: Props) {
  const router = useRouter();

  return (
    <div className="py-16 sm:py-28">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-4xl mb-10 text-center">Our story</h2>
        {short ? (
          <>
            <p className="text-center text-lg font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dicta deserunt doloribus recusandae nisi eaque odit unde. Ut
              recusandae totam, maxime neque in praesentium quam illum harum,
              dicta excepturi veniam natus temporibus vero quisquam nisi ullam
              id fugit est facilis. Beatae laudantium aperiam error ea molestias
              quos at ipsam blanditiis.
            </p>
            <div className="flex justify-center mt-10">
              <button
                className="border border-yellow-500 py-4 px-8 uppercase tracking-[2px] text-sm hover:bg-yellow-500 hover:text-white transition-colors self-center"
                onClick={() => router.push("/about")}
              >
                Read more
              </button>
            </div>
          </>
        ) : (
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <p className="font-light mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci dicta deserunt doloribus recusandae nisi eaque odit
                unde. Ut recusandae totam, maxime neque in praesentium quam
                illum harum, dicta excepturi veniam natus temporibus vero
                quisquam nisi ullam id fugit est facilis. Beatae laudantium
                aperiam error ea molestias quos at ipsam blanditiis.
              </p>
              <p className="font-light">
                Sed eros tellus, finibus dictum pellentesque non, scelerisque
                volutpat risus. Praesent malesuada augue sed ante gravida
                sodales. Morbi rhoncus aliquet justo, sed volutpat nulla
                pulvinar ut. Quisque ultricies metus eget massa hendrerit,
                commodo cursus enim mollis. Vestibulum nec orci non massa
                eleifend convallis.
              </p>
              <ul className="grid grid-cols-2 gap-1 mt-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      <MdDoneOutline />
                    </span>
                    <span className="text-sm uppercase">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center sm:justify-end">
              <Image 
                src="/assets/images/bread_about.jpg"
                alt="Bread"
                width={350}
                height={525}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface Props {
  short?: boolean;
}
