import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function CreateTournament() {
  // TODO: Page accessible uniquement aux admins
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [max_team, setMaxTeam] = useState(16)
  const [game, setGame] = useState("")

  async function createTournament(e: any) {
    e.preventDefault()

    const { data, error } = await supabase.from("tournament").insert({
        name,
        description,
        date: new Date(date).toISOString().toLocaleString(),
        max_team,
        game
    })

    console.log(data, error)
  }
  return (
    <div className="bg-neutral-900 px-64 py-16">
      <form className="flex flex-col gap-y-4" onSubmit={createTournament}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
        <input type="date" name="date" id="" value={date} onChange={(e) => setDate((e.target as any).value)}  />
        <input type="number" name="max_team" id="" value={max_team} onChange={(e) => setMaxTeam((e.target as any).value)} />
        <input type="text" name="game" id="" value={game} onChange={(e) => setGame(e.target.value)} />
        <button>Create</button>
      </form>
    </div>
  );
}
