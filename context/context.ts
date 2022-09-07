import { createContext } from "react";
import { Session } from '@supabase/supabase-js'

interface SessionContextInterface {
    session: Session | null;
    isAdmin: boolean;
}

const SessionContext = createContext<SessionContextInterface>({session: null, isAdmin: false})

export default SessionContext
