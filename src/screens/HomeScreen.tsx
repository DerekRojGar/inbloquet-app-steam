import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ setCurrentScreen }) => {
  if (!setCurrentScreen) {
    console.error('Error: setCurrentScreen no está definido en HomeScreen');
    return null;
  }
  
  return (
    <ImageBackground
      source={require('../assets/bg-inbloquet-03.png')}
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
      resizeMode="cover" // Muestra el 100% de la imagen sin recortes
    >
      {/* Logo en la esquina superior izquierda */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Inbloquet-logo.png')}
          style={{
            width: 100,
            height: 100,

          }}
        />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>| INBLOQUERS |</Text>
      </View>

      {/* Menú Inclinado */}
      <View style={styles.menuContainer}>
      <TouchableOpacity style={[styles.section, styles.steamSection]} onPress={() => setCurrentScreen('STEAM')}>
          <Text style={styles.sectionText}>STEAM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.section, styles.gameSection]}>
          <Text style={styles.sectionText}>Juego</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.section, styles.blogSection]}>
          <Text style={styles.sectionText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.section, styles.extraSection]}>
          <Text style={styles.sectionText}>Extra</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: height * 0.1, // Ajuste para dejar espacio al logo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    position: 'absolute',
    width: width * 1.9,
    height: height / 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    transform: [{ rotate: '-10deg' }],
  },
  steamSection: {
    backgroundColor: 'rgba(0, 56, 145, 0.8)',
    top: height * 0.1,
  },
  gameSection: {
    backgroundColor: 'rgba(246, 197, 0, 0.8)',
    top: height * 0.225,
  },
  blogSection: {
    backgroundColor: 'rgba(75, 177, 224, 0.8)',
    top: height * 0.35,
  },
  extraSection: {
    backgroundColor: 'rgba(209, 221, 0, 0.8)',
    top: height * 0.477,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  logoContainer: {
    position: 'absolute',
    top: 30, // Ajusta según el dispositivo
    left: 20, // Ajusta según el dispositivo
    zIndex: 2, // Asegura que esté por encima del header
  },
  logo: {
    width: 80, // Tamaño reducido para no obstruir el header
    height: 80,
    resizeMode: 'contain',
  },
});

export default HomeScreen;