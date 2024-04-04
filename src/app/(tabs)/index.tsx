import { StyleSheet, Text, View, Image ,TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EditScreenInfo from '../../components/EditScreenInfo';
import Card from "../../components/Card"



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding:10,
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
