import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import FoodItem from 'src/components/FoodItem';
import products from 'assets/data/products';

const foodList = () => {
  const {homeCookId} = useLocalSearchParams()

  const foodItems = [
    { id: '1',tag:'pizza',ratings:4.3, title: 'Pizza', imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png', price:"2.5" },
    { id: '2',tag:'not pizza',ratings:4.3, title: 'Burger', imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png', price: "2.3" },
    // Add more items...
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <FoodItem key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
  

export default foodList