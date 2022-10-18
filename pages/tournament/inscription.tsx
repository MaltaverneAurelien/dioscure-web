import TournamentInscription from "../../components/TournamentInscription";
import TournamentHeader from "../../components/TournamentHeader";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../../utils/supabaseClient";
import SessionContext from "../../context/context";

export default function Inscription() {
  const { session } = useContext(SessionContext);
  const [tournament, setTournament] = useState<any>(null);
  const [team, setTeam] = useState<any>(null);

  async function fetchTeam() {
    const { data } = await supabase
      .from("team_users")
      .select(
        `
        *,
        team (
          *
        )
      `
      )
      .eq("team.tournament", tournament.id)
      .eq("users", session?.user.id)
      .single();

    if (!data) return;

    setTeam(data.team);
  }

  useEffect(() => {
    if (session && tournament) fetchTeam();
  }, [session, tournament]);

  return (
    <>
      <TournamentHeader />
      <TournamentInscription />
    </>
  );
}
