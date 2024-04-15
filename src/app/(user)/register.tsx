import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function RegisterHomeCook() {
  const [cuisine, setCuisine] = useState('');
  const [foodItems, setFoodItems] = useState('');
  const [location, setLocation] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = () => {
    // Placeholder for submission logic
    // Here you might want to validate the inputs or send them to your backend
    Alert.alert("Registration Submitted", `Cuisine: ${cuisine}\nFood Items: ${foodItems}\nLocation: ${location}\nContact Details: ${contactDetails}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register as a Home Cook</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Cuisine (e.g., Italian, Indian)"
        value={cuisine}
        onChangeText={setCuisine}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Food Items (e.g., Pizza, Curry)"
        value={foodItems}
        onChangeText={setFoodItems}
        multiline
      />
      
      <TextInput
        style={styles.input}
        placeholder="Location (e.g., New York, Mumbai)"
        value={location}
        onChangeText={setLocation}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contact Details (e.g., email, phone)"
        value={contactDetails}
        onChangeText={setContactDetails}
      />
      
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
