import { supabase } from '../utils/supabaseClient'

export default function Auth() {
    async function signInWithTwitch() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'twitch',
        })
    }
    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    signInWithTwitch()
                }}
                className="button block"   
            >Login Twitch
            </button>
        </div>
    )
}