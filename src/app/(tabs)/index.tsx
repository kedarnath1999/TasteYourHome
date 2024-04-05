import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import Card from "../../components/Card"
import homeCooks from 'assets/data/homeCooks';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={homeCooks}
        renderItem={({item}) => <Card product={item}/>}
        contentContainerStyle={{padding:5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
  },
  image: {
    width:'100%',
    aspectRatio:1
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
