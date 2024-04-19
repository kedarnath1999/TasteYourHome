import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import FoodItem from 'src/components/FoodItem';
import products from 'assets/data/products';
import { useEffect } from 'react';
import { supabase } from 'src/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { useProductList } from 'src/api/products';
import { ActivityIndicator } from 'react-native';

const foodList = () => {
  const { data, isLoading, error } = useProductList();

if (isLoading) {
  return <ActivityIndicator />;
}
if (error) {
  return <Text>Failed to fetch products</Text>;
}
  return (
    <View>
      <Stack.Screen options={{title:"Food menue"}} />
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((product) => (
          <FoodItem key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
  

export default foodList