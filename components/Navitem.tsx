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
      return "text-yellow md:border-b-yellow";
    }
  }

  function activeColor() {
    if (properties.href === router.pathname) {
      return "text-yellow";
    }
  }

  return (
    <>
      <a
        href={properties.href}
        className={
          "transition-all duration-300 md:border-2 md:px-2 md:py-2 md:border-transparent md:uppercase md:hover:border-b-yellow md:hover:text-yellow " +
          activeBorder()
        }
      >
        <li className="flex items-center p-2">
          <properties.icon className={"float-left mr-2 " + activeColor()} />
          {properties.text}
        </li>
      </a>
    </>
  );
}
