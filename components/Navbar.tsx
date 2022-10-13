import SessionContext from "../context/context";
import ProfileItem from "./ProfileItem";
import Navbarmenu from "./Navbarmenu";
import NavItem from "./Navitem";
import Button from "./Button";
import { supabase } from "../utils/supabaseClient";
import { useContext, useState } from "react";
// Import des react icons
import { BsTrophy, BsTwitch } from "react-icons/bs";
import { FaDumbbell, FaBars } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FiGift } from "react-icons/fi";

export default function Navbar() {
  const { session } = useContext(SessionContext);
  const [navbarmenu, setNavbarmenu] = useState(false);

  async function signInWithTwitch() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitch",
    });
    console.log(error);
  }
  function handleClick() {
    setNavbarmenu(!navbarmenu);
    console.log(navbarmenu);
  }
  return (
    <>
      <nav className="bg-dark_blue p-2 flex justify-between font-montserrat shadow-sm shadow-gray-600 md:items-center">
        <Button
          class="text-white items-center text-2xl"
          icon={FaBars}
          onClick={handleClick}
        />
        <Navbarmenu show={navbarmenu} />
        <a href="/" className="hidden w-36 md:flex">
          <img src="/DioscureTV_logo.png" />
        </a>
        <ul className="hidden md:flex md:items-center md:gap-4 md:ml-8 md:mr-auto">
          <NavItem href="/" icon={MdLiveTv} text="Live" />
          <NavItem href="/tournoi" icon={BsTrophy} text="Tournoi" />
          <NavItem href="/coaching" icon={FaDumbbell} text="Coaching" />
          <NavItem href="/recompenses" icon={FiGift} text="Récompenses" />
        </ul>
        {session === null && (
          <Button
            class="rounded-full px-4 py-1 text-sm items-center whitespace-nowrap text-white bg-twitch_purple hover:bg-violet-800"
            iconClass="text-base"
            icon={BsTwitch}
            onClick={() => {
              signInWithTwitch();
            }}
          >
            Connexion avec Twitch
          </Button>
        )}
        {session !== null && <ProfileItem />}
      </nav>
    </>
  );
}
