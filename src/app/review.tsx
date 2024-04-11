import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert ,TouchableOpacity} from 'react-native';
import Colors from 'src/constants/Colors';

const ReviewPage = () => {
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
  
    const submitReview = () => {
      // Placeholder for submitting the review
      // You might want to validate the rating is within a certain range here
      // And then send the data to your backend or handle it as necessary
      Alert.alert('Review Submitted', `Rating: ${rating}\nReview: ${review}`);
    };
  
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Write a Review</Text>

        <Text style={styles.label}>Your Rating</Text>
        <TextInput
            style={styles.input}
            placeholder="Rating (1-5)"
            value={rating}
            onChangeText={setRating}
            keyboardType="numeric"
        />

        <Text style={styles.label}>Your Review</Text>
        <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Write your review here..."
            value={review}
            onChangeText={setReview}
            multiline={true}
            numberOfLines={4}
        />

        {/* Using TouchableOpacity for the button with custom styles */}
        <TouchableOpacity style={styles.button} onPress={submitReview}>
            <Text style={styles.buttonText}>Submit Review</Text>
        </TouchableOpacity>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint, // Set your desired color
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff', // Text color
        fontWeight: 'bold',
    },
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    multilineInput: {
      height: 100, // Fixed height for the multiline input
      textAlignVertical: 'top', // Aligns text to the top on Android
    },
  });
  
  export default ReviewPage;
  