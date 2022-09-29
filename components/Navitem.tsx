import type { IconType } from "react-icons";
import { useRouter } from "next/router";

type Props = {
  href: string;
  icon: IconType;
  text: string;
};

export default function NavItem(properties: Props) {
  const router = useRouter();

  function activeBorder() {
    if (properties.href === router.pathname) {
      return "border-b-light_blue";
    }
  }

  function activeColor() {
    if (properties.href === router.pathname) {
      return "text-light_blue";
    }
  }

  return (
    <>
      <a
        href={properties.href}
        className={
          "text-white border-2 px-2 py-2 border-transparent uppercase hover:border-b-light_blue " +
          activeBorder()
        }
      >
        <li className="flex items-center">
          <properties.icon className={"float-left mr-2 " + activeColor()} />
          {properties.text}
        </li>
      </a>
    </>
  );
}
