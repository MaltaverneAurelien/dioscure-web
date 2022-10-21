import FooterItem from "./FooterItem";
// Import des react icons
import { BsTwitch } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark_blue flex flex-col justify-evenly font-montserrat md:flex-row md:justify-around md:items-center">
        <ul className="p-4">
          <img src="/DioscureTV_logo.png" className="w-20 m-auto md:w-28" />
          <p className="text-yellow flex text-xs pb-2 justify-center gap-x-1 md:text-base">
            Suis-moi sur <span className="text-red_purple">mes réseaux</span>
          </p>
          <div className="flex justify-center gap-6">
            <FooterItem href="https://twitter.com/Dioscure_" icon={FiTwitter} />
            <FooterItem href="https://www.youtube.com/c/Dioscure/videos" icon={AiOutlineYoutube} />
            <FooterItem href="https://discord.gg/9vSKPJUTN8" icon={SiDiscord} />
            <FooterItem href="https://www.twitch.tv/dioscure" icon={BsTwitch} />
          </div>
        </ul>
        <ul className="flex flex-col items-center p-4">
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
