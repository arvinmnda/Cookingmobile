import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image, Alert } from 'react-native';
import axios from 'axios';

const SimpanScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6571c0f7d61ba6fcc0137436.mockapi.io/cookingmobile/blog');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEditButtonClick = (item) => {
    navigation.navigate('EditFrom', { title: item.title, recipe: item.recipe, imageLink: item.imageLink, foodType: item.foodType });
  };

  const handleDeleteButtonClick = async (itemId) => {
    try {
      // Konfirmasi pengguna sebelum menghapus
      Alert.alert(
        'Konfirmasi',
        'Apakah Anda yakin ingin menghapus resep ini?',
        [
          {
            text: 'Batal',
            style: 'cancel',
          },
          {
            text: 'Hapus',
            onPress: async () => {
              // Hapus data dari API
              await axios.delete(`https://6571c0f7d61ba6fcc0137436.mockapi.io/cookingmobile/blog/${itemId}`);

              // Ambil ulang data setelah penghapusan
              fetchData();
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Resep Tersimpan</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 18, marginBottom: 8 }}>{item.title}</Text>
            <Text>{item.recipe}</Text>
            {item.imageLink ? <Image source={{ uri: item.imageLink }} style={{ width: 200, height: 200 }} /> : null}
            <Text style={{ marginTop: 8 }}>Jenis Makanan: {item.foodType}</Text>
            <Button title="Edit" onPress={() => handleEditButtonClick(item)} />
            <Button title="Hapus" onPress={() => handleDeleteButtonClick(item.id)} />
          </View>
        )}
      />
      <Button title="Tambahkan resep" onPress={() => navigation.navigate('FormPage')} />
    </View>
  );
};

export default SimpanScreen;
