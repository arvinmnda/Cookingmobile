import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const NasiGorengScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.recipeImage}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Nasi_goreng_sari_laut.jpg' }}
        />
       <Text style={styles.sectionTitle}>Bahan-bahan:</Text>
        <Text>1. 2 piring nasi putih</Text>
        <Text>2. 2 butir telur</Text>
        <Text>3. 100 gram daging ayam, potong kecil-kecil</Text>
        <Text>4. 1 buah bawang merah, cincang</Text>
        <Text>5. 2 siung bawang putih, cincang</Text>
        <Text>6. 1 batang daun bawang, iris halus</Text>
        <Text>7. 1 sendok makan saus tiram</Text>
        <Text>8. 1 sendok makan kecap manis</Text>
        <Text>9. Garam dan merica secukupnya</Text>
        <Text>10. Minyak goreng secukupnya</Text>
      </View>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Langkah-langkah:</Text>
        <Text>1. Panaskan minyak dalam wajan, tumis bawang merah dan bawang putih hingga harum.</Text>
        <Text>2. Masukkan potongan daging ayam, aduk hingga berubah warna.</Text>
        <Text>3. Dorong ayam ke tepi wajan, masukkan telur, aduk cepat hingga telur matang.</Text>
        <Text>4. Masukkan nasi putih, aduk rata dengan telur dan ayam.</Text>
        <Text>5. Tambahkan saus tiram, kecap manis, garam, dan merica. Aduk rata.</Text>
        <Text>6. Masukkan daun bawang, aduk sebentar hingga semua bahan tercampur dan matang.</Text>
        <Text>7. Angkat dan hidangkan Nasi Goreng panas dalam piring saji.</Text>
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

export default NasiGorengScreen;
