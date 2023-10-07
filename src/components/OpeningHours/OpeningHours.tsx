import { twMerge } from "tailwind-merge";

export function OpeningHours({ headingClassName }: Props) {
  return (
    <>
      <h3 className={twMerge('text-lg mb-4', headingClassName)}>Opening hours</h3>
      <ul className="text sm">
        <li>
          Mon - Fri: <span className="text-gray-400">6am - 10pm</span>
        </li>
        <li>
          Sat: <span className="text-gray-400">6am - 6pm</span>
        </li>
        <li>
          Sun: <span className="text-gray-400">6am - 10am</span>
        </li>
      </ul>
    </>
  );
};

interface Props {
  headingClassName?: string;
}
