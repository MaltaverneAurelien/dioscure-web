type Props = {
  text: string;
};

export default function TournamentItem(properties: Props) {
  return (
    <>
      <li className="flex uppercase cursor-pointer border-2 border-transparent hover:border-b-white">
        {properties.text}
      </li>
    </>
  );
}
