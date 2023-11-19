import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
const HomeScreen = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi
  const scrollY = useRef(new Animated.Value(0)).current;
  const handleRecipePress = (recipeId, recipeType) => {
    // Navigasi ke halaman yang sesuai berdasarkan jenis resep
    if (recipeType === 'Makanan' && recipeId !== 3) {
      navigation.navigate('Makanan', { recipeId });
    } else if (recipeType === 'Minuman') {
      navigation.navigate('Jus', { recipeId });
    } else if (recipeType === 'Makanan' && recipeId === 3) {
      navigation.navigate('Sate', { recipeId });
    }
  };
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
    <Animated.Text style={[styles.title, { opacity: headerOpacity }]}>Cooking Food</Animated.Text>
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Cari resep..." />
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
    <ScrollView
      style={styles.recipeContainer}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      scrollEventThrottle={16}
    >
      {BlogList.map((recipe) => (
        <TouchableOpacity
          key={recipe.id}
          onPress={() => handleRecipePress(recipe.id, recipe.category)}
          style={styles.recipeItem}
        >
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
    marginTop: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Pjs-Bold',
    color: 'black',
    marginBottom: 16,
    marginTop: 2,
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
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 20,
    fontFamily: 'Pjs-Bold',
    color: 'red',
    marginBottom: 8,
  },
  recipeCategory: {
    fontSize: 14,
    fontFamily: 'Pjs-Regular',
    color: 'red',
  },
  recipeLevel: {
    fontSize: 16,
    fontFamily: 'Pjs-Regular',
    color: 'red',
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 8,
    marginTop: -9,
  },
  searchButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 40,
    marginBottom: 18,
    marginTop: -9,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
export default HomeScreen;