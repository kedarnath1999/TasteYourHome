import { View, Text, TextInput, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import { Link, Stack } from 'expo-router';
import {supabase} from '../../lib/supabase'

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false)

  const handleSignUp = async () => {
    setLoading(true)
    const {error} = await supabase.auth.signUp({email,password})
    if(error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign up' }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

    <TouchableOpacity disabled={loading} style={styles.checkoutButton} onPress={handleSignUp}>
        <Text style={styles.checkoutButtonText}>Create Account</Text>
    </TouchableOpacity>      
      <Link href="/sign-in" style={styles.textButton}>
        Sign in
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
  checkoutButton: {
    position: 'absolute', // Position the button over the bottom of the screen
    bottom: 20, // Raise the button up 20 pixels from the bottom
    left: 0,
    right: 0,
    backgroundColor: '#1E90FF', // A prominent button color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Add elevation for Android (drop shadow)
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 10, // Add some margin to the sides
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SignUpScreen;