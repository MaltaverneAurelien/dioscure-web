import SessionContext from "../context/context";
import { useContext } from "react";

export default function Home() {
  const { session } = useContext(SessionContext);

  return (
    <>
      <title>{session?.user.user_metadata.nickname} - DioscureTV</title>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}