import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { supabase } from 'src/lib/supabase';
import { useAuth } from 'src/providers/AuthProvider';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  // Add your navigation logic and any additional functionalities
  const {profile} = useAuth()
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        {/* <Image
          source={require('./path-to-your-profile-image.jpg')} // Update with your image path
          style={styles.profileImage}
        /> */}
        <View>
          <Text style={styles.profileName}>kedarnath</Text>
          <Text style={styles.profileEmail}>kedarnathrg.1999@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        {/* You will repeat this structure for each menu item */}
        {
            profile?.group === "ADMIN" &&
                <Link href={`/(admin)`} asChild>
                <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
                <FontAwesome name="user-circle" size={24} color="black" />
                <Text style={styles.menuItemText}>Cook view</Text>
                <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </Link>
        }
        {/* <Link href={`/(user)/profile/register`} asChild> */}
            <TouchableOpacity style={styles.menuItem} onPress={() => {navigation.navigate('register')}}>
            <FontAwesome name="user-plus" size={24} color="black" />
            <Text style={styles.menuItemText}>Register as home cook</Text>
            <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
        {/* </Link> */}
            <TouchableOpacity style={styles.menuItem} onPress={() => {supabase.auth.signOut()}}>
            <FontAwesome name="sign-out" size={24} color="black" />
            <Text style={styles.menuItemText}>Sign out</Text>
            <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
        {/* ... other menu items ... */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Or any color based on your theme
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8', // Light grey background
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileEmail: {
    color: 'grey',
  },
  viewActivity: {
    color: '#007BFF', // Blue color for the link
  },
  menuSection: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC', // Light line color for separation
  },
  menuItemText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
  // ...other styles
});

export default ProfileScreen;
