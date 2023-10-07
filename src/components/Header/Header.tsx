"use client";
import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { MdMenu, MdClose } from "react-icons/md";

const menuItemClass =
  "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-yellow-500 hover:after:w-full after:transition-all";
const mobileMenuItemClass = "p-4 w-full text-center";

export function Header() {
  const pathname = usePathname();
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setScrollYPosition(scrollY);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full transition-colors duration-500 z-40",
          { "bg-white drop-shadow-md": scrollYPosition > 50 }
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 text-yellow-500">
            <Link
              href="/"
              className="text-3xl font-bold uppercase"
              scroll={false}
            >
              Bakery
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={twMerge(
                  menuItemClass,
                  `${pathname === "/" ? "after:w-full" : ""}`
                )}
                scroll={false}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={twMerge(
                  menuItemClass,
                  `${pathname === "/about" ? "after:w-full" : ""}`
                )}
                scroll={false}
              >
                About us
              </Link>
              <Link
                href="/products"
                className={twMerge(
                  menuItemClass,
                  `${pathname === "/products" ? "after:w-full" : ""}`
                )}
                scroll={false}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={twMerge(
                  menuItemClass,
                  `${pathname === "/contact" ? "after:w-full" : ""}`
                )}
                scroll={false}
              >
                Contact
              </Link>
            </nav>
            <button
              className="text-2xl h-10 w-10 border border-transparent hover:border-yellow-500 hover:text-white flex md:hidden items-center justify-center transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "fixed z-50 top-0 w-72 h-full overflow-y-auto bg-yellow-900 transition-all duration-500 md:hidden",
          { "right-0": isMobileMenuOpen, "-right-72": !isMobileMenuOpen }
        )}
      >
        <div className="text-right">
          <button
            className="text-white text-lg p-4 inline-flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MdClose />
          </button>
          <nav className="flex flex-col items-center text-white divide-y divide-yellow-800 border-t border-yellow-800">
            <Link
              href="/"
              className={twMerge(
                mobileMenuItemClass,
                `${pathname === "/" ? "text-yellow-500" : ""}`
              )}
              scroll={false}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={twMerge(
                mobileMenuItemClass,
                `${pathname === "/about" ? "text-yellow-500" : ""}`
              )}
              scroll={false}
            >
              About us
            </Link>
            <Link
              href="/products"
              className={twMerge(
                mobileMenuItemClass,
                `${pathname === "/products" ? "text-yellow-500" : ""}`
              )}
              scroll={false}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className={twMerge(
                mobileMenuItemClass,
                `${pathname === "/contact" ? "text-yellow-500" : ""}`
              )}
              scroll={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
