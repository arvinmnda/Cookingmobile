import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';  
import ProfileScreen from '../screens/Profile';
import SimpanScreen from '../screens/Simpan';
import { Home3, Save2, Profile } from 'iconsax-react-native';
import MakananScreen from '../screens/Makanan';
import  JusApukatScreen from '../screens/Jus';
import  SateScreen from '../screens/Sate';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Makanan" component={MakananScreen} />
      <Stack.Screen name="Jus" component={JusApukatScreen } />
      <Stack.Screen name="Sate" component={SateScreen } />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Home3 name="Home" size={'30'} color={'blue'} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Simpan"
          component={SimpanScreen}
          options={{
            tabBarLabel: 'Simpan',
            tabBarIcon: ({ color, size }) => (
              <Save2 name="nama-ikon-simpan" size={'30'} color={'blue'} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Profile name="nama-ikon-profile" size={'30'} color={'blue'} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
