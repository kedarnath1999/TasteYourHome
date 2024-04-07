import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useCart } from 'src/providers/CartProvider';

const FoodItem = ({ product }) => {
    const [itemCount, setItemCount] = useState(0);
    const {addItems,items} = useCart()


  const incrementCount = () => {
    // setItemCount(prevCount => prevCount + 1);
    addItems(product)
  };


  return (
    <View style={styles.card}>
      {/* Food Image */}
      <Image source={{ uri: product.imageUri }} style={styles.image} />
      {/* Container for Title and Price */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 200,
    },
    contentContainer: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    price: {
      fontSize: 16,
      color: '#666',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#FF6347', // Tomato color
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginHorizontal: 16,
      marginBottom: 16,
      alignItems: 'center',
      borderRadius: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default FoodItem;
