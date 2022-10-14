import type { IconType } from "react-icons";

type Props = {
  class?: string;
  iconClass?: string;
  hover?: string;
  onClick?: () => void;
  icon?: IconType;
  children?: string;
};

const Button = (properties: Props) => {
  return (
    <>
      <button className={"flex p-2 " + properties.class} onClick={properties.onClick}>
        {properties.icon !== undefined && (
          <properties.icon className={"mr-2 " + properties.iconClass} />
        )}
        {properties.children}
      </button>
    </>
  );
};

export default Button;
