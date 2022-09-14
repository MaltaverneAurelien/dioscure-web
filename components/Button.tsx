import type { IconType } from "react-icons";

type Props = {
  class?: string;
  text: string;
  hover?: string;
  onClick?: () => void;
  icon: IconType;
};

export default function Button(properties: Props) {

  return (
    <>
        <button className="flex items-center px-4 py-1 text-sm text-white rounded-full bg-twitch_purple hover:bg-violet-800 focus:ring-1 focus:ring-white w-max whitespace-nowrap">
          <properties.icon className="float-left mr-2 text-base" />{properties.text}
        </button>
    </>
  );
}
