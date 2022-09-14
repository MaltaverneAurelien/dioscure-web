import DropdownItem from "./DropdownItem";
import { supabase } from "../utils/supabaseClient";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

type Props = {
  show: boolean;
};

export default function Dropdown(properties: Props) {
  function showDropdown() {
    return properties.show ? "opacity-100" : "opacity-0";
  }
  async function signout() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <>
      <ul
        className={
          "bg-dark_blue absolute right-0 z-10 mt-2 w-56 divide-y divide-opacity-80 divide-white rounded-md shadow-xl transition-all duration-300 " +
          showDropdown()
        }
      >
        <DropdownItem
          type="href"
          href="/profil"
          icon={CgProfile}
          text="Profil"
        />
        <DropdownItem
          type="button"
          icon={BiLogOut}
          text="Se déconnecter"
          button={() => {
            signout();
          }}
        />
      </ul>
    </>
  );
}
