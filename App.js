import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { TouchableOpacity } from 'react-native';

// import React from 'react';
// import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { colors, fontType } from './src/theme';

const recipes = [
  {
    id: '1',
    title: 'Nasi Goreng',
    image: require('./images/fried-rice-1762493_1280.jpg'),
    description: 'Nasi goreng adalah hidangan nasi yang digoreng dalam minyak dan dicampur dengan bahan-bahan seperti telur, daging, sayuran, dan rempah-rempah.',
    level: 'Sulit', // Menandakan level sulit
  },
  {
    id: '2',
    title: 'Mie Goreng',
    image: require('./images/mie-goreng-6715015_1280.jpg'),
    description: 'Mie goreng adalah hidangan mie yang digoreng dalam minyak dan dicampur dengan bahan-bahan seperti sayuran, daging, telur, dan saus.',
    level: 'Sedang', // Menandakan level sedang
  },
  {
    id: '3',
    title: 'Ayam Bakar',
    image: require('./images/ayam-bakar-1810336_1280.jpg'),
    description: 'Ayam bakar adalah hidangan ayam yang dipanggang dengan bumbu khusus, biasanya disajikan dengan nasi dan sambal.',
    level: 'Mudah', // Menandakan level mudah
  },
  // Tambahkan resep lainnya di sini
];

const RecipeList = () => {
  // const filterRecipesByLevel = (level) => {
  //   return recipes.filter((recipe) => recipe.level === level);
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat datang Pengguna</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari resep..." />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.recipeContainer}>
        {recipes.map((recipe) => (
          <TouchableOpacity key={recipe.id} style={styles.recipeItem}>
            <Image source={recipe.image} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipeDescription}>{recipe.description}</Text>
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
  welcomeText: {
    fontSize: 24,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
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
  recipeDescription: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  // sectionTitle: {
  //   fontSize: 20,
  //   fontFamily: fontType['Pjs-Bold'],
  //   color: colors.black(),
  //   marginTop: 16,
  //   marginBottom: 8,
  // },
});

export default RecipeList;
