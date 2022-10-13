import type { IconType } from "react-icons";

type Props = {
  type: "href" | "button";
  href?: string;
  icon: IconType;
  text: string;
  button?: () => void;
};

export default function DropdownItem(properties: Props) {
  return (
    <>
      <li className={"py-1"}>
        {properties.type === "href" && (
          <a
            href={properties.href}
            className="flex items-center px-4 py-2 first:text-sm text-white md:text-base"
          >
            <properties.icon className="float-left mr-2 text-base md:text-lg" />
            {properties.text}
          </a>
        )}
        {properties.type === "button" && (
          <button
            type="button"
            onClick={properties.button}
            className="flex items-center px-4 py-2 text-sm text-white md:text-base"
          >
            <properties.icon className="float-left mr-2 text-base md:text-lg" />
            {properties.text}
          </button>
        )}
      </li>
    </>
  );
}
