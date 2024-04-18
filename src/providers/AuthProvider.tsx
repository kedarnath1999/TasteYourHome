import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { supabase } from "src/lib/supabase";
import { Session } from "@supabase/supabase-js";

const AuthContext = createContext({});

export default function AuthProvider({children}: PropsWithChildren) {
    const [session,setSession] = useState(null)
    const [loading,setLoading] = useState(false)
    const [profile,setProfile] = useState(null)

    useEffect(() => {
        fetchSession();

        supabase.auth.onAuthStateChange((_event,session) => {
            setSession(session)
        })
    },[])

    const fetchSession = async () => {
        setLoading(true)
        const {data,error} =  await supabase.auth.getSession();
        const sessionData = data.session
        setSession(sessionData)
        
        if(sessionData){
            const {data} = await supabase
                .from('profiles')
                .select('*')
                .eq('id',sessionData.user.id)
                .single();
            setProfile(data || null)
            console.log(data)
        }


        setLoading(false)
    }


    return <AuthContext.Provider value={{session,loading,profile,fetchSession}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)