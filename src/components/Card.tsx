import { StyleSheet, Text, View, Image ,TouchableOpacity, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useSegments } from 'expo-router';

const Card = ({ product }) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/homeCooks/${product.id}`} asChild>
        <Pressable style={styles.card} onPress={()=>console.log("click")}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.details}>
            <Text style={styles.title}>{product.name}</Text>
            <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color="gold" />
            <Text style={styles.rating}>{product.rating}</Text>
            </View>
        </View>
        </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      margin: 10,
      elevation: 3, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    details: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      marginLeft: 5,
      fontSize: 18,
    }
  });
  

export default Card