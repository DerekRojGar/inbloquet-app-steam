// App.tsx
import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SteamScreen from './src/screens/SteamScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  
  // No necesitamos un estado adicional para la pantalla de detalle
  // porque la gestionamos dentro del componente SteamScreen

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{ flex: 1 }}>
        {currentScreen === 'Home' ? (
          <HomeScreen setCurrentScreen={setCurrentScreen} />
        ) : (
          <SteamScreen setCurrentScreen={setCurrentScreen} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;