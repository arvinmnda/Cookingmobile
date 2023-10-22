import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Notification, Receipt21, Clock, Message } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { CategoryList, BlogList } from './data'; // Impor CategoryList dan BlogList dari data.js

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
    backgroundColor: colors.white(),
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 16,
  },
  recipeContainer: {
    flex: 1,
  },
  recipeItem: {
    marginBottom: 20,
    backgroundColor: colors.grey(0.1),
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
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 8,
  },
  recipeCategory: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  recipeLevel: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 16, // Ubah menjadi marginTop agar tombol Search berada di bawah teks "Cooking Food"
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: colors.grey(0.5),
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 8,
  },
  searchButton: {
    backgroundColor: colors.blue(),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white(),
  },
});

export default App;
