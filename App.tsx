import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SteamScreen from './src/screens/SteamScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Home' ? (
        <HomeScreen setCurrentScreen={setCurrentScreen} />
      ) : (
        <SteamScreen setCurrentScreen={setCurrentScreen} />
      )}
    </View>
  );
};

export default App;
