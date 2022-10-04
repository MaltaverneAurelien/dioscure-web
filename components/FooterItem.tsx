import type { IconType } from "react-icons";

type Props = {
  href: string;
  icon: IconType;
};

export default function FooterItem(properties: Props) {
    
  return (
    <>
      <a
        href={properties.href}
        className="text-white text-2xl cursor-pointer hover:text-orange"
      >
        <properties.icon />
      </a>
    </>
  );
}
