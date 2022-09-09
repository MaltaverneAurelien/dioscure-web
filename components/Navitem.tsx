import type { IconType } from "react-icons";

type Props = {
  href: string;
  icon: IconType;
  text: string;
  active: boolean;
};

export default function NavItem(properties: Props) {
  function showActive() {
    return properties.active ? "" : "underline underline-offset-8";
  }

  return (
    <>
      <li className={"text-white px-5 " + showActive()}>
        <a href={properties.href} className="flex items-center">
          <properties.icon className="float-left mr-2" />
          {properties.text}
        </a>
      </li>
    </>
  );
}
