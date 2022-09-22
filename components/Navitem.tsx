import type { IconType } from "react-icons";
import { useRouter } from "next/router";

type Props = {
  href: string;
  icon: IconType;
  text: string;
};

export default function NavItem(properties: Props) {
  const router = useRouter();

  function showActive() {
    if (properties.href === router.pathname) {
      return properties.href ? "border-b-light_blue" : "";
    }
    // if (properties.icon === properties.href) {
    //   return properties.icon ? "text-light_blue" : "";
    // }
  }
  return (
    <>
      <a
        href={properties.href}
        className={
          "text-white border-2 px-2 py-2 border-transparent uppercase " + showActive()
        }
      >
        <li className="flex items-center">
          <properties.icon className="float-left mr-2" />
          {properties.text}
        </li>
      </a>
    </>
  );
}
