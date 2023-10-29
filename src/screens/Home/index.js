import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cooking Food</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari resep..." />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.recipeContainer}>
        {BlogList.map((recipe) => (
          <TouchableOpacity key={recipe.id} style={styles.recipeItem}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipeLevel}>{recipe.level}</Text>
            <Text style={styles.recipeCategory}>{recipe.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Pjs-Bold',
    color: 'black',
    marginBottom: 16,
  },
  recipeContainer: {
    flex: 1,
  },
  recipeItem: {
    marginBottom: 20,
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 16,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 20,
    fontFamily: 'Pjs-Bold',
    color: 'white',
    marginBottom: 8,
  },
  recipeCategory: {
    fontSize: 14,
    fontFamily: 'Pjs-Regular',
    color: 'white',
  },
  recipeLevel: {
    fontSize: 16,
    fontFamily: 'Pjs-Regular',
    color: 'white',
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 8,
  },
  searchButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

const BlogList = [
  {
    id: 1,
    title: 'Nasi Goreng',
    category: 'Makanan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Nasi_goreng_sari_laut.jpg',
    level: 'Tingkatan Level Membuat : Sulit',
  },
  {
    id: 2,
    title: 'Jus Avoacado',
    category: 'Minuman',
    image: 'https://images.genpi.co/resize/1200x675-100/uploads/arsip/normal/2022/02/10/ilustrasi-jus-alpukat-foto-envato-elements-wl42.webp',
    level: 'Tingkatan Level Membuat : Mudah',
  },
  {
    id: 3,
    title: 'Sate Madura',
    category: 'Makanan',
    image: 'https://asset.kompas.com/crops/qPCGH68DyIHjt2BeurBwiAK_6yc=/103x66:966x642/750x500/data/photo/2021/03/27/605ed24c33816.jpg',
    level: 'Tingkatan Level Membuat : Sedang',
  },
];

export default App;