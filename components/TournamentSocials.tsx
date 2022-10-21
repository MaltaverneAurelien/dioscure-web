import type { IconType } from "react-icons";

type Props = {
  href?: string;
  text: string;
  icon?: IconType;
};

export default function TournamentSocials(properties: Props) {
  return (
    <>
      <a className="flex items-center italic py-1.5 text-sm transition-all duration-500 hover:text-yellow md:text-lg" href={properties.href}>
        {properties.icon !== undefined && <properties.icon className="mr-2 text-base md:text-2xl" />}
        {properties.text}
      </a>
    </>
  );
}
