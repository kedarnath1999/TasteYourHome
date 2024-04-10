import React from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import { Link, Redirect } from 'expo-router';
import { supabase } from 'src/lib/supabase';
import { useAuth } from 'src/providers/AuthProvider';

const Index = () => {
  const{session, loading}  = useAuth();

  if(loading){
    return <ActivityIndicator />
  }

  if(!session){
    return <Redirect href={'/sign-in'}/>
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10,gap:10 }}>
      {/* Use React Native's Button component */}
      <Link href={'/(user)'} style={{ marginBottom: 10 }} asChild>
          <Button title="User" onPress={() => {}} />
      </Link>
      <Link href={'/(admin)'} asChild>
          <Button title="Admin" onPress={() => {}} />
      </Link>
      <Link href={'/sign-in'} asChild>
          <Button title="sign-in" onPress={() => {}} />
      </Link>
        <Button title="sign-out" onPress={() => {supabase.auth.signOut()}} />
    </View>
  );
};

export default Index;
