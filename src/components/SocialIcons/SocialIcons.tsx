import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const socialIcons: { url: string; icon: ReactNode }[] = [
  { url: "https://instagram.com", icon: <BsInstagram /> },
  { url: "https://facebook.com", icon: <BsFacebook /> },
  { url: "https://youtube.com", icon: <BsYoutube /> },
];

export function SocialIcons({ headingClassName }: Props) {
  return (
    <>
      <h3 className={twMerge("text-lg mb-4", headingClassName)}>
        Find us on social media
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {socialIcons.map((socialIcon) => {
          return (
            <a
              key={socialIcon.url}
              href={socialIcon.url}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-yellow-500 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-300 rounded-full"
            >
              {socialIcon.icon}
            </a>
          );
        })}
      </div>
    </>
  );
}

interface Props {
  headingClassName?: string;
}
