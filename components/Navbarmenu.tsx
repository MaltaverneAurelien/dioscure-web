import NavItem from "./Navitem";
// Import des react icons
import { BsTrophy } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FiGift } from "react-icons/fi";

type Props = {
  show: boolean;
};

export default function Navbarmenu(properties: Props) {
  function showNavbarMenu() {
    return properties.show ? "opacity-100" : "opacity-0";
  }

  return (
    <>
      <a href="/" className="">
        <img src="/DioscureTV_logo_mobile.png" className="w-12 md:hidden" />
      </a>
      <ul className={"bg-dark_blue absolute mt-2 p-2 rounded-md top-16 left-3 z-10 md:hidden transition-all duration-300 " + showNavbarMenu()}>
        <NavItem href="/" icon={MdLiveTv} text="Live" />
        <NavItem href="/tournoi" icon={BsTrophy} text="Tournoi" />
        <NavItem href="/coaching" icon={FaDumbbell} text="Coaching" />
        <NavItem href="/recompenses" icon={FiGift} text="Récompenses" />
      </ul>
    </>
  );
}
