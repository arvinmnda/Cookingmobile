import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const JusApukatScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.recipeImage}
          source={{ uri: 'https://thumb.viva.id/intipseleb/1265x711/2022/10/11/634556a4058da-manfaat-jus-alpukat.jpg' }} // Replace 'URL_TO_AVOCADO_IMAGE' with the actual image URL for avocado juice
        />
        <Text style={styles.sectionTitle}>Bahan-bahan:</Text>
        <Text>1. 2 buah alpukat matang</Text>
        <Text>2. 200 ml susu cair</Text>
        <Text>3. 2 sendok makan gula pasir (sesuai selera)</Text>
        <Text>4. Es batu secukupnya</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Langkah-langkah:</Text>
        <Text>1. Kupas dan buang biji alpukat. Potong alpukat menjadi potongan kecil.</Text>
        <Text>2. Blender alpukat bersama susu cair dan gula pasir hingga halus dan tercampur.</Text>
        <Text>3. Saring jus alpukat menggunakan saringan halus untuk mendapatkan tekstur yang lembut.</Text>
        <Text>4. Siapkan gelas, tambahkan es batu ke dalamnya.</Text>
        <Text>5. Tuangkan jus alpukat ke dalam gelas.</Text>
        <Text>6. Jus apukat siap disajikan. Nikmati segarnya!</Text>
        {/* Langkah-langkah lainnya */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default JusApukatScreen;
