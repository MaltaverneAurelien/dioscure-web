import type { IconType } from "react-icons";

type Props = {
  href: string;
  icon: IconType;
  text: string;
  children?: string;
};

export default function LiveItem(properties: Props) {
  return (
    <>
      <a
        href={properties.href}
        className="flex items-center my-3 transition-all duration-700 text-white hover:bg-white hover:text-dark_blue"
      >
        <properties.icon className="text-5xl p-2 bg-light_blue" />
        <ul className="flex-col container ml-3">
          <li className="text-2xl">{properties.text}</li>
          <li className="text-xs">{properties.children}</li>
        </ul>
      </a>
    </>
  );
}
