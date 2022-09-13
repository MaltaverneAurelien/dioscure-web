import SessionContext from "../context/context";
import { supabase } from "../utils/supabaseClient";
import { useState } from "react";
import { useContext } from "react";
import NavItem from "./Navitem";
import DropdownItem from "./DropdownItem";
import Button from "./Button";
// Import des react icons
import { BsTrophy, BsTwitch } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdLiveTv } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FiGift } from "react-icons/fi";

export default function Navbar() {
  const { session } = useContext(SessionContext);
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setDropdown(!dropdown);
  }
  function showDropdown() {
    return dropdown ? "opacity-100" : "opacity-0";
  }
  async function signout() {
    const { error } = await supabase.auth.signOut();
  }
  async function signInWithTwitch() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitch",
    });
  }
  return (
    <>
      <nav className="px-8 py-2 shadow-lg bg-dark_blue shadow-dark_blue">
        <div className="flex items-center justify-between mx-auto flex-nowrap">
          <a href="/" className="flex items-center">
            <img src="/DioscureTV_logo.png" className="w-48" />
          </a>
          <ul className="container flex flex-wrap items-center float-left gap-2">
            <NavItem active={false} href="/live" icon={MdLiveTv} text="Live" />
            <NavItem
              active={true}
              href="/tournoi"
              icon={BsTrophy}
              text="Tournoi"
            />
            <NavItem
              active={true}
              href="/coaching"
              icon={FaDumbbell}
              text="Coaching"
            />
            <NavItem
              active={true}
              href="/recompenses"
              icon={FiGift}
              text="Récompenses"
            />
          </ul>
          {session === null && (
            // <Button onClick={} icon={}>Bouton Test</Button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                signInWithTwitch();
              }}
              className="flex items-center px-4 py-1 text-sm text-white rounded-full bg-twitch_purple hover:bg-violet-800 focus:ring-1 focus:ring-white w-max whitespace-nowrap"
            >
              <BsTwitch className="float-left mr-2 text-base" />
              Connexion avec Twitch
            </button>
          )}
          {session !== null && (
            <div className="relative inline-block text-left">
              <button type="button" onClick={handleClick}>
                <img
                  src={session.user.user_metadata.avatar_url}
                  className="w-12 rounded-full"
                />
              </button>
              {/* <Dropdown show={dropdown} /> */}
              <ul
                className={
                  "bg-dark_blue absolute right-0 z-10 mt-2 w-56 divide-y divide-opacity-80 divide-white rounded-md shadow-xl transition-all duration-300 " +
                  showDropdown()
                }
              >
                <DropdownItem type="href" href="/profil" icon={CgProfile} text="Profil" />
                <DropdownItem type="button" icon={BiLogOut} text="Se déconnecter" button={() => {
                    signout();
                  }} />
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
