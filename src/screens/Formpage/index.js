import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FormPage = () => {
  const [title, setTitle] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSaveButtonClick = () => {
    console.log('Judul:', title);
    console.log('Resep:', recipe);
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
      <Button title="Simpan" onPress={handleSaveButtonClick} />
    </View>
  );
};

export default FormPage;
