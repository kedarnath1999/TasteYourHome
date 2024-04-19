import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import AdminFoodItem from 'src/components/AdminFoodItem';
import products from 'assets/data/products';
import { useProductList } from 'src/api/products';
import { ActivityIndicator } from 'react-native';

const foodList = () => {
  const {homeCookId} = useLocalSearchParams()

  const { data, isLoading, error } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((product) => (
        <AdminFoodItem key={product.id} product={product} />
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