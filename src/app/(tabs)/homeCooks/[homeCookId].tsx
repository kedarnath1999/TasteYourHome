import { StyleSheet, Text, View, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Card = () => {
  const {homeCookId} = useLocalSearchParams()
  return (
    <View>
        <Text>Produxt List page {homeCookId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    
  });
  

export default Card