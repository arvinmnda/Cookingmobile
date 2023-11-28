// SimpanScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SimpanScreen = () => {
  const navigation = useNavigation();

  const handleFormButtonClick = () => {
    navigation.navigate('FormPage');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Tombol untuk pergi ke halaman formulir */}
      <Button title="Buka Formulir" onPress={handleFormButtonClick} />
    </View>
  );
};

export default SimpanScreen;
