import { StyleSheet,Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '../components/Themed';
import { useContext } from 'react';
import {useCart} from 'src/providers/CartProvider'
import CartListItem from 'src/components/CartListItem';

export default function Cart() {
  const {items} = useCart()
  console.log(items)
  return (
    <View >
      <FlatList 
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item}/>}
      />
      <Text>jjjjj</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
