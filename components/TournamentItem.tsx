type Props = {
  href?: string;
  text: string;
};

export default function TournamentItem(properties: Props) {
  return (
    <>
      <li className="flex uppercase cursor-pointer border-2 border-transparent hover:border-b-white">
        <a href={properties.href}>{properties.text}</a>
      </li>
    </>
  );
}
