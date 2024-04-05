import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FoodItem = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

  const incrementCount = () => {
    setItemCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <View style={styles.container}>
      {/* Tag and Title */}
      <View style={styles.header}>
        <Text style={styles.tag}>{item.tag}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* Image */}
      <Image source={{ uri: item.imageUri }} style={styles.image} />

      {/* Ratings and Price */}
      <View style={styles.details}>
        <View style={styles.ratingsContainer}>
          <AntDesign name="star" size={16} color="#FFD700" />
          <Text style={styles.ratings}>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{item.description}</Text>

      {/* Add Button */}
      <View style={styles.footer}>
        <Text style={styles.itemCount}>{itemCount}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.removeButton} onPress={decrementCount}>
            <AntDesign name="minus" size={16} color="white" />
            <Text style={styles.buttonText}>REMOVE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={incrementCount}>
            <Text style={styles.buttonText}>ADD</Text>
            <AntDesign name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    alignItems: 'center',
  },
  removeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#CCCCCC', // A greyish color for the remove button
    borderBottomLeftRadius: 10, // Match the container's border radius
    marginRight: 2, // Spacing between remove and add button
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#D9534F', // A reddish color for the add button
    borderBottomRightRadius: 10, // Match the container's border radius
    marginLeft: 2, // Spacing between remove and add button
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 4, // Space between icon and text
  },
  footer:{
    flexDirection:'row',
    display:'flex',
    justifyContent:'space-between',
    alignContent:"center"
  },
  itemCount:{
    marginLeft:20,
    fontWeight:"bold",
    fontSize: 16, 
    marginRight: 16,
  }
});

export default FoodItem;
