import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from 'src/providers/CartProvider';
import CartListItem from 'src/components/CartListItem';

export default function Cart() {
  const { items, totalCost} = useCart();


  const handleCheckout = () => {
    // Implement checkout functionality
    console.log('Proceeding to checkout');
  };

  return (
    <View style={styles.container}>
    <FlatList
      data={items}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      keyExtractor={(item) => item.id.toString()} // Make sure each item has a unique 'id' property and it's a string
      contentContainerStyle={styles.listContentContainer}
    />
    {/* Total Cost Display */}
    <View style={styles.totalCostContainer}>
      <Text style={styles.totalCostText}>Total Cost: ${totalCost.toFixed(2)}</Text>
    </View>
    <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
      <Text style={styles.checkoutButtonText}>Checkout</Text>
    </TouchableOpacity>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    padding: 10,
    paddingBottom: 80, // Add enough padding to account for the checkout button,
    gap:10
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
  totalCostContainer: {
    position: 'absolute',
    bottom: 70, // Adjust this based on the height of your checkout button
    left: 0,
    right: 0,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Semi-transparent background
  },
  totalCostText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  // ... other styles ...
});
