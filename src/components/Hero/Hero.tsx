import clsx from "clsx";
import Link from "next/link";

export function Hero({
  title,
  subtitle,
  shrink,
  showLink,
  linkText,
  linkTo,
}: Props) {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center">
      <div
        className={clsx(
          "bg-black bg-opacity-40 flex items-center justify-center",
          { "h-[600px]": !shrink, "py-40": shrink }
        )}
      >
        <div className="container text-white text-center flex flex-col gap-y-8 px-4">
          {subtitle && <p className="uppercase tracking-[2px]">{subtitle}</p>}
          <h1 className="text-4xl sm:text-6xl font-bold">{title}</h1>
          {showLink && (
            <Link
              className="border border-yellow-500 py-4 px-8 uppercase tracking-[2px] text-sm hover:bg-yellow-500 hover:text-white transition-colors self-center"
              href={linkTo}
              scroll={false}
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  subtitle?: string;
  shrink?: boolean;
} & (
  | {
      showLink: true;
      linkText: string;
      linkTo: string;
    }
  | {
      showLink?: false;
      linkText?: never;
      linkTo?: never;
    }
);
