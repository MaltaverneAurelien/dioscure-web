import SessionContext from "../context/context";
import ProfileItem from "./ProfileItem";
import NavItem from "./Navitem";
import Button from "./Button";
import { supabase } from "../utils/supabaseClient";
import { useContext } from "react";
// Import des react icons
import { BsTrophy, BsTwitch } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  const { session } = useContext(SessionContext);

  async function signInWithTwitch() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitch",
    });
  }

  return (
    <>
      <nav className="px-8 py-2 shadow-lg shadow-light_blue">
        <div className="flex items-center justify-between mx-auto flex-nowrap">
          <a href="/" className="flex items-center">
            <img src="/DioscureTV_logo.png" className="w-36" />
          </a>
          <ul className="container flex flex-wrap items-center float-left ml-6 gap-4">
            <NavItem href="/" icon={MdLiveTv} text="Live" />
            <NavItem href="/tournoi" icon={BsTrophy} text="Tournoi" />
            <NavItem href="/coaching" icon={FaDumbbell} text="Coaching" />
            <NavItem href="/recompenses" icon={FiGift} text="Récompenses" />
          </ul>
          {session === null && (
            <Button
              text="Connexion avec Twitch"
              icon={BsTwitch}
              onClick={() => {
                signInWithTwitch();
              }}
            />
          )}
          {session !== null && <ProfileItem />}
        </div>
      </nav>
    </>
  );
}
