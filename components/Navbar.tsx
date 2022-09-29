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

export default function Navbar() {
  const { session } = useContext(SessionContext);

  async function signInWithTwitch() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitch",
    });
  }

  return (
    <>
      <nav className="px-8 py-2 font-montserrat bg-dark_blue shadow-sm shadow-gray-600">
        <div className="flex items-center justify-between mx-auto flex-nowrap">
          <a href="/" className="flex items-center">
            <img src="/DioscureTV_logo.png" className="w-36" />
          </a>
          <ul className="container flex flex-wrap items-center float-left gap-4 ml-6">
            <NavItem href="/" icon={MdLiveTv} text="Live" />
            <NavItem href="/tournoi" icon={BsTrophy} text="Tournoi" />
            <NavItem href="/coaching" icon={FaDumbbell} text="Coaching" />
            <NavItem href="/recompenses" icon={FiGift} text="Récompenses" />
          </ul>
          {session === null && (
            <Button
              class="rounded-full px-4 py-1 text-sm items-center whitespace-nowrap bg-twitch_purple hover:bg-violet-800"
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
        </div>
      </nav>
    </>
  );
}
