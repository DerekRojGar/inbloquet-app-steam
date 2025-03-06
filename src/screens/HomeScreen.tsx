import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const { width, height } = Dimensions.get('window'); // Obtener el ancho y alto de la pantalla

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.png')} // Cambia por tu imagen de fondo
      style={globalStyles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Inbloquet</Text>
      </View>

      {/* Menú Inclinado */}
      <View style={styles.menuContainer}>
        {/* Sección STEAM */}
        <TouchableOpacity style={[styles.section, styles.steamSection]}>
          <Text style={styles.sectionText}>STEAM</Text>
        </TouchableOpacity>

        {/* Sección Juego */}
        <TouchableOpacity style={[styles.section, styles.gameSection]}>
          <Text style={styles.sectionText}>Juego</Text>
        </TouchableOpacity>

        {/* Sección Blog */}
        <TouchableOpacity style={[styles.section, styles.blogSection]}>
          <Text style={styles.sectionText}>Blog</Text>
        </TouchableOpacity>

        {/* Sección Extra */}
        <TouchableOpacity style={[styles.section, styles.extraSection]}>
          <Text style={styles.sectionText}>Extra</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Inbloquet-logo.png')} // Ruta del logo
          style={styles.logo}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
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
    width: width * 1.5, // Más ancho que la pantalla
    height: height / 8, // Altura reducida
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    transform: [{ rotate: '-10deg' }], // Todas las secciones inclinadas hacia la izquierda
  },
  steamSection: {
    backgroundColor: 'rgba(33, 150, 243, 0.8)', // Azul
    top: height * 0.1, // Posición superior
  },
  gameSection: {
    backgroundColor: 'rgba(255, 193, 7, 0.8)', // Amarillo
    top: height * 0.225, // Sin separación (ajustado para que estén juntas)
  },
  blogSection: {
    backgroundColor: 'rgba(76, 175, 80, 0.8)', // Verde
    top: height * 0.35, // Sin separación
  },
  extraSection: {
    backgroundColor: 'rgba(156, 39, 176, 0.8)', // Morado
    top: height * 0.477, // Sin separación
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
    bottom: 20, // Coloca el logo en la parte inferior
    left: 0,
    right: 0,
    alignItems: 'center', // Centra el logo horizontalmente
    zIndex: 1, // Asegura que el logo esté por encima de otros elementos
  },
  logo: {
    width: 100, // Ajusta el ancho del logo
    height: 100, // Ajusta la altura del logo
    resizeMode: 'contain', // Asegura que el logo se ajuste al tamaño sin distorsión
  },
});

export default HomeScreen;