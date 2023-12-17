import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FormPage = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [recipe, setRecipe] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [foodType, setFoodType] = useState('');

  const handleSaveButtonClick = async () => {
    try {
      const recipeData = {
        title,
        recipe,
        imageLink,
        foodType,
      };

      await firestore().collection('recipes').add(recipeData);

      console.log('Recipe data saved successfully');

      setTitle('');
      setRecipe('');
      setImageLink('');
      setFoodType('');

      navigation.navigate('Simpan');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleEditButtonClick = () => {
    // Menyiapkan data untuk halaman 'EditForm'
    const editFormData = {
      title,
      recipe,
      imageLink,
      foodType,
    };

    // Navigasi ke halaman 'EditForm' dan kirim data yang akan diedit
    navigation.navigate('EditFrom', { editFormData });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Formulir Resep</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
        placeholder="Judul"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
        placeholder="Resep"
        multiline
        value={recipe}
        onChangeText={setRecipe}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
        placeholder="Link Gambar"
        value={imageLink}
        onChangeText={setImageLink}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
        placeholder="Jenis makanan"
        onChangeText={setFoodType}
      />
      {imageLink ? <Image source={{ uri: imageLink }} style={{ width: 200, height: 200, marginBottom: 16 }} /> : null}
      <Button title="Simpan" onPress={handleSaveButtonClick} />
      <Button title="Edit" onPress={handleEditButtonClick} />
    </View>
  );
};

export default FormPage;
