import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useCart } from 'src/providers/CartProvider';

const AdminFoodItem = ({ product }) => {
    const {addItems,items} = useCart()


  const incrementCount = () => {
    // setItemCount(prevCount => prevCount + 1);
    addItems(product)
  };

  return (
    <View style={styles.container}>
      {/* Tag and Title */}
      <View style={styles.header}>
        <Text style={styles.tag}>{product.tag}</Text>
        <Text style={styles.title}>{product.title}</Text>
      </View>

      {/* Image */}
      <Image source={{ uri: product.imageUri }} style={styles.image} />

      {/* Ratings and Price */}
      <View style={styles.details}>
        <View style={styles.ratingsContainer}>
          <AntDesign name="star" size={16} color="#FFD700" />
          <Text style={styles.ratings}>{product.ratings}</Text>
        </View>
        <Text style={styles.price}>₹{product.price}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Add Button */}
      <Link href={`/(admin)/homeCooks/create?id=${product.id}`} asChild>
        <TouchableOpacity style={styles.addButton} onPress={incrementCount}>
            <Text style={styles.addButtonText}>Edit</Text>
            <AntDesign name="edit" size={16} color="white" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 8,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#FFF1F0', // Choose a background color similar to the tag
    },
    tag: {
      color: '#D9534F', // Color for the 'Bestseller' tag
      fontWeight: 'bold',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      flex: 1, // Ensure title can expand and push ratings to the edge
    },
    image: {
      width: '100%',
      height: 150,
    },
    details: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratings: {
      marginLeft: 4,
      fontSize: 14,
    },
    price: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    description: {
      paddingHorizontal: 10,
      color: '#686868', // Subdued text color for the description
      fontSize: 14,
    },
    addButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#D9534F', // Button background color
      borderBottomLeftRadius: 10, // Match the container's border radius
      borderBottomRightRadius: 10, // Match the container's border radius
    },
    addButtonText: {
      color: 'white',
      fontWeight: 'bold',
      marginRight: 4, // Space between text and the plus icon
    },
  });

export default AdminFoodItem;
