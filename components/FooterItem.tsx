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
        className="text-xl cursor-pointer hover:text-orange hover:scale-150"
      >
        <properties.icon />
      </a>
    </>
  );
}
