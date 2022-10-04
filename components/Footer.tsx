import FooterItem from "./FooterItem";
// Import des react icons
import { BsTwitch } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark_blue w-full flex md:flex-row justify-around items-start font-montserrat">
        <ul className="p-5">
          <img src="/DioscureTV_logo.png" className="w-36" />
          <p className="text-yellow text-base pb-6">
            Suis-moi sur <span className="text-red_purple">mes réseaux</span>
          </p>
          <div className="flex gap-6 pb-5">
            <FooterItem href="https://twitter.com/Dioscure_" icon={FiTwitter} />
            <FooterItem href="https://www.youtube.com/c/Dioscure/videos" icon={AiOutlineYoutube} />
            <FooterItem href="https://discord.gg/9vSKPJUTN8" icon={SiDiscord} />
            <FooterItem href="https://www.twitch.tv/dioscure" icon={BsTwitch} />
          </div>
        </ul>
        <ul className="p-5">
          <p className="text-yellow font-bold text-2xl pb-4">Product</p>
          <li className="text-white text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Préférence sur les cookies
          </li>
          <li className="text-white text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Me contacter
          </li>
          <li className="text-white text-xs pb-2 font-semibold hover:text-orange cursor-pointer">
            © 2021-2022 DioscureTV. Tous droits réservés.
          </li>
        </ul>
      </footer>
    </>
  );
}
