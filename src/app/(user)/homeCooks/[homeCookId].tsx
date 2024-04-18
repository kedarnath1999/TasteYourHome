import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import FoodItem from 'src/components/FoodItem';
import products from 'assets/data/products';

const foodList = () => {
  const {homeCookId} = useLocalSearchParams()


  return (
    <View>
      <Stack.Screen options={{title:"Food menue"}} />
      <ScrollView contentContainerStyle={styles.container}>
        {products.map((product) => (
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