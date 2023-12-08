import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import axios from 'axios';

const EditForm = ({ route, navigation }) => {
  const { title: initialTitle, recipe: initialRecipe, imageLink: initialImageLink, foodType: initialFoodType,} = route.params;
  const [title, setTitle] = useState(initialTitle);
  const [recipe, setRecipe] = useState(initialRecipe);
  const [imageLink, setImageLink] = useState(initialImageLink);
  const [foodType, setFoodType] = useState(initialFoodType);

  const handleSaveButtonClick = async () => {
    try {
      // Pengecekan apakah route.params atau route.params.id sudah diinisialisasi
      if (!route.params || !route.params.id) {
        console.error('Item ID is missing');
        return;
      }
      const itemId = route.params.id;
      const response = await axios.put(`https://6571c0f7d61ba6fcc0137436.mockapi.io/cookingmobile/blog/${itemId}`, {
        title,
        recipe,
        imageLink,
        foodType,
      });
  
      console.log('Response:', response.data);
  
      // Navigasi kembali ke halaman sebelumnya setelah data terunggah
      navigation.goBack();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    // Fungsi ini akan dijalankan ketika komponen dimuat, sehingga kita dapat memuat data resep yang akan diedit
    setTitle(initialTitle);
    setRecipe(initialRecipe);
    setImageLink(initialImageLink);
    setFoodType(initialFoodType);
  }, [initialTitle, initialRecipe, initialImageLink, initialFoodType]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Edit Resep</Text>
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
        value={foodType}
        onChangeText={setFoodType}
      />
      {imageLink ? <Image source={{ uri: imageLink }} style={{ width: 200, height: 200, marginBottom: 16 }} /> : null}
      <Button title="Simpan" onPress={handleSaveButtonClick} />
    </View>
  );
};

export default EditForm;
