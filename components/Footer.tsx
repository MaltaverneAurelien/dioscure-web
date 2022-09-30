// Import des react icons
import { BsTrophy, BsTwitch } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FiGift } from "react-icons/fi";

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
            <BsTwitch className="text-white text-2xl cursor-pointer hover:text-orange" />
            <BsTwitch className="text-white text-2xl cursor-pointer hover:text-orange" />
            <BsTwitch className="text-white text-2xl cursor-pointer hover:text-orange" />
            <BsTwitch className="text-white text-2xl cursor-pointer hover:text-orange" />
            <BsTwitch className="text-white text-2xl cursor-pointer hover:text-orange" />
          </div>
        </ul>
        <ul className="p-5">
          <p className="text-yellow font-bold text-2xl pb-4">Product</p>
          <li className="text-white text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Stocks
          </li>
          <li className="text-white text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Mutual Funds
          </li>
          <li className="text-white text-md pb-2 font-semibold hover:text-orange cursor-pointer">
            Fixed Deposit
          </li>
        </ul>
      </footer>
    </>
  );
}
