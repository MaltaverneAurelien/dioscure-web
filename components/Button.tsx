type Props = {
  class: string;
  text: string;
  hover: string;
};

export default function Button(properties: Props) {

  return (
    <>
        <button className={properties.class + properties.hover}>
          {properties.text}
        </button>
    </>
  );
}
