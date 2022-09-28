import type { IconType } from "react-icons";

type Props = {
  class?: string;
  hover?: string;
  onClick?: () => void;
  icon?: IconType;
  children?: string;
};

const Button = (properties: Props) => {
  return (
    <>
      <button className={"flex items-center px-4 py-1 text-sm text-white rounded-full w-max whitespace-nowrap " + properties.class} onClick={properties.onClick}>
        {properties.icon !== undefined && (
          <properties.icon className="float-left mr-2" />
        )}
        {properties.children}
      </button>
    </>
  );
};

export default Button;
