import { StyleSheet,Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '../components/Themed';
import { useContext } from 'react';
import {useCart} from 'src/providers/CartProvider'

export default function Cart() {
  const {items} = useCart()
  return (
    <View >
      <Text style={styles.title}>{items.length}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
