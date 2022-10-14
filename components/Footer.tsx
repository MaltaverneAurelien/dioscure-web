import FooterItem from "./FooterItem";
// Import des react icons
import { BsTwitch } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark_blue flex flex-col justify-evenly font-montserrat md:flex-row md:justify-around md:items-start">
        <ul className="p-5 pb-2">
          <img src="/DioscureTV_logo.png" className="w-24 md:w-36" />
          <p className="text-yellow text-xs pb-2 md:text-base md:pb-6">
            Suis-moi sur <span className="text-red_purple">mes réseaux</span>
          </p>
          <div className="flex gap-6">
            <FooterItem href="https://twitter.com/Dioscure_" icon={FiTwitter} />
            <FooterItem href="https://www.youtube.com/c/Dioscure/videos" icon={AiOutlineYoutube} />
            <FooterItem href="https://discord.gg/9vSKPJUTN8" icon={SiDiscord} />
            <FooterItem href="https://www.twitch.tv/dioscure" icon={BsTwitch} />
          </div>
        </ul>
        <ul className="p-5 pt-2">
          <p className="text-yellow font-bold text-base md:text-2xl pb-2 md:pb-4">Product</p>
          <li className="text-xs md:text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Préférence sur les cookies
          </li>
          <li className="text-xs md:text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Me contacter
          </li>
          <li className="text-xs pb-2 font-semibold hover:text-orange cursor-pointer">
            © 2021-2022 DioscureTV. Tous droits réservés.
          </li>
        </ul>
      </footer>
    </>
  );
}
