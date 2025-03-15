import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ setCurrentScreen }) => {
  return (
    <ImageBackground
      source={require('../assets/bg-inbloquet-06.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Logo más grande y más arriba */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Inbloquet-logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Header debajo del logo */}
      <View style={styles.header}>
        <Text style={styles.title}>| INBLOQUERS |</Text>
      </View>

      {/* Menú inclinado (sin cambios) */}
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
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: height * -0.03,  // Ajusta esta posición vertical (más arriba)
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  logo: {
    width: 200,  // Tamaño aumentado
    height: 200,
    resizeMode: 'contain',
  },
  header: {
    padding: 2,
    alignItems: 'center',
    marginTop: height * 0.2,  // Espacio para el logo (ajustado)
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
});

export default HomeScreen;