import { View, Text, StyleSheet, Image, TextInput , TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useInsertProduct } from 'src/api/products';


const CreateScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');

  const router = useRouter();

  const {id} = useLocalSearchParams();
  const isUpdating = !!id;

  const {mutate:insertProduct} = useInsertProduct()

  const onSubmit = () => {
    if(isUpdating){
      onUpdateCreate()
    }
    else{
      onCreate()
    }
  }

  const validateInput = () => {
    setErrors('');
    if (!name) {
      setErrors('Name is required');
      return false;
    }
    if (!price) {
      setErrors('Price is required');
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors('Price should be a number');
      return false;
    }
    return true;
  };

  const onDelete = () => {

  }

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }

    console.warn('Creating dish');
    setName('');
    setPrice('');
    setImage('');

    insertProduct({name,price: parseFloat(price),image})
    router.back();
  };

  const onUpdateCreate = () =>{
    if (!validateInput()) {
      return;
    }

    console.warn('updating dish');
    setName('');
    setPrice('');
    setImage('');
    router.back();
  }

  const confirmDelete =() =>{
    Alert.alert('confirm', 'Are you sure you want to delete',[
      {
        text:'Cancel'
      },
      {
        text: 'Delete',
        style:'destructive',
        onPress:onDelete
      }
    ]);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: isUpdating? "Update item": "Create item"}}/>
      <Image
        source={{ uri: image || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Margarita..."
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.error}>{errors}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={onSubmit}>
        <Text  style={styles.checkoutButtonText}>{isUpdating? "Update":"Create"}</Text>
      </TouchableOpacity>
      {isUpdating && 
        <>
          <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
            <AntDesign name="delete" size={18} color="white" style={styles.buttonIcon} />
            <Text  style={styles.checkoutButtonText}>Delete</Text>
          </TouchableOpacity>
        </>
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  checkoutButton: {
    // General button styles (used for the Create/Update button)
    backgroundColor: Colors.light.primary, // Use your theme color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginTop: 20, // Adjusted marginTop for spacing
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteButton: {
    // Specific styles for the Delete button
    backgroundColor: '#FF6347', // A red color for the delete button
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginTop: 10, // Space between this and the update/create button
  },
  buttonIcon: {
    marginRight: 8, // Space between icon and text
  },
});

export default CreateScreen;