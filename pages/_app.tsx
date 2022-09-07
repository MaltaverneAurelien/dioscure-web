import '../styles/globals.css'
import { useState, useEffect } from 'react'
import SessionContext from '../context/context'
import { supabase } from '../utils/supabaseClient'
import type { Session } from '@supabase/supabase-js'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [isAdmin,setIsAdmin] = useState<boolean>(false)
  async function getSession()  {
    const {
        data: { session },
        error: session_err,
      } = await supabase.auth.getSession();

      if (session_err  || session === null) {

      }
      const { data, error: profile_err } = await supabase.from("profiles").select("isAdmin").eq('id', session?.user.id).single()

      setIsAdmin(data?.isAdmin)
      setSession(session);
  }

  useEffect(() => {
    getSession()

    const response = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )
    
    return () => {
      response.data.subscription?.unsubscribe()
    }
  }, []);
  return (
    <SessionContext.Provider value={{session, isAdmin}}>
      <Component {...pageProps} />
    </SessionContext.Provider>)
}

export default MyApp
