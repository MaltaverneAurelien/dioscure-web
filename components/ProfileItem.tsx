import SessionContext from "../context/context";
import Dropdown from "./Dropdown";
import { useState, useContext } from "react";

export default function ProfileItem() {
  const { session } = useContext(SessionContext);
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setDropdown(!dropdown);
  }
  return (
    <>
      <div className="relative inline-block text-left">
        <button type="button" onClick={handleClick}>
          <img
            src={session?.user.user_metadata.avatar_url}
            className="w-12 rounded-full"
          />
        </button>
        <Dropdown show={dropdown} />
      </div>
    </>
  );
}
