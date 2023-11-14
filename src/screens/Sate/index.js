import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const SateScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.recipeImage}
          source={{ uri: 'https://wiratech.co.id/wp-content/uploads/2019/02/bumbu-sate-madura.jpg' }} // Ganti 'URL_TO_SATE_IMAGE' dengan URL gambar sate yang sebenarnya
        />
        <Text style={styles.sectionTitle}>Bahan-bahan:</Text>
        <Text>1. Daging ayam (sesuai selera)</Text>
        <Text>2. Bumbu marinasi (kecap manis, bawang putih cincang, garam, merica)</Text>
        <Text>3. Tusuk sate</Text>
        <Text>4. Minyak untuk melumuri tusuk sate</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Langkah-langkah:</Text>
        <Text>1. Potong daging ayam menjadi dadu sesuai keinginan.</Text>
        <Text>2. Marinasi daging ayam dengan bumbu marinasi selama beberapa jam atau semalam agar bumbu meresap.</Text>
        <Text>3. Ambil tusuk sate, lumuri dengan minyak agar sate tidak lengket.</Text>
        <Text>4. Tusukkan potongan daging ayam yang sudah dimarinasi ke tusuk sate.</Text>
        <Text>5. Panaskan grill atau panggangan, panggang sate hingga matang dan berwarna kecoklatan.</Text>
        <Text>6. Sate ayam siap disajikan. Nikmati dengan saus kacang atau saus sate kesukaan Anda!</Text>
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

export default SateScreen;
