import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useSegments } from 'expo-router';

const Card = ({ product }) => {
  const segments = useSegments();
  const [expanded, setExpanded] = useState(false); // State to manage expand/collapse

  const toggleReviews = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <Link href={`/${segments[0]}/homeCooks/${product.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color="gold" />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
          {/* Toggle Button for Reviews */}
          <Pressable onPress={toggleReviews} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>{expanded ? 'Hide Reviews' : 'Show Reviews'}</Text>
          </Pressable>
        </View>
        {/* Expandable Reviews Section */}
        {expanded && (
          <View style={styles.reviewsContainer}>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <Text key={index} style={styles.reviewText}>{review}</Text>
              ))
            ) : (
              <Text>No reviews available.</Text>
            )}
          </View>
        )}
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      margin: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    details: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      marginLeft: 5,
      fontSize: 18,
    },
    toggleButton: {
      marginTop: 10,
    },
    toggleButtonText: {
      fontWeight: 'bold',
      color: '#007BFF',
      textAlign: 'center',
    },
    reviewsContainer: {
      padding: 10,
      backgroundColor: '#F8F8F8', // Light grey background for better visual separation
    },
    reviewText: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
    }
  });

export default Card;
