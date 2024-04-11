import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { supabase } from "src/lib/supabase";
import { Session } from "@supabase/supabase-js";

const AuthContext = createContext({});

export default function AuthProvider({children}: PropsWithChildren) {
    const [session,setSession] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchSession = async () => {
            setLoading(true)
            const {data,error} =  await supabase.auth.getSession();
            setSession(data.session)
            // console.log(session)
            setLoading(false)
        }

        fetchSession();

        supabase.auth.onAuthStateChange((_event,session) => {
            setSession(session)
        })
    },[])

    return <AuthContext.Provider value={{session,loading}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)