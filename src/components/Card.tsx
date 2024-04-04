import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Card = ({ imageUri, title, rating, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png' }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>"title"</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={24} color="gold" />
          <Text style={styles.rating}>4.3</Text>
        </View>
      </View>
    </TouchableOpacity>
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