import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { getImageSource } from '../utils/imageMappings';
import { globalStyles } from '../styles/globalStyles';

const DetailScreen = ({ itemData, color, goBack }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        goBack();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  const { title, blogContent } = itemData;
  
  return (
    <View style={[globalStyles.container, { backgroundColor: color + '20' }]}>
      {/* Header Mejorado */}
      <View style={[styles.header, { backgroundColor: color }]}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>CIENCIA</Text>
        
        <Image 
          source={require('../assets/Inbloquet-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado Divertido */}
        <Image 
          source={getImageSource(blogContent.headerImage)} 
          style={styles.headerImage}
          resizeMode="cover"
        />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title} 🧬</Text>
          <View style={styles.metaContainer}>
            <Text style={styles.metaText}>👩🔬 Por: {itemData.author}</Text>
            <Text style={styles.metaText}>📅 {itemData.date}</Text>
          </View>
        </View>

        {blogContent.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Image 
                source={getImageSource('science-icon.png')} 
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            
            <Text style={styles.sectionContent}>
              {section.content} {index % 2 === 0 ? '🔍' : '✨'}
            </Text>
            
            {section.image && (
              <View style={styles.imageContainer}>
                <Image 
                  source={getImageSource(section.image)} 
                  style={styles.sectionImage}
                  resizeMode="contain"
                />
                <Text style={styles.imageCaption}>¡Mira esto! 👀</Text>
              </View>
            )}
          </View>
        ))}

        {blogContent.conclusion && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.conclusionTitle]}>
              🎉 Conclusión
            </Text>
            <Text style={styles.sectionContent}>
              {blogContent.conclusion} 🌈
            </Text>
          </View>
        )}

        {blogContent.references && (
          <View style={styles.funFactBox}>
            <Text style={styles.funFactTitle}>Referencias 🤔</Text>
            {blogContent.references.map((ref, idx) => (
              <View key={idx} style={styles.factBubble}>
                <Text style={styles.factText}>💡 {ref}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    elevation: 5,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#FFF',

  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  titleContainer: {
    marginBottom: 25,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  metaText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    tintColor: '#FFF',
  },
  sectionContent: {
    fontSize: 16,
    color: '#FFF',
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Arial Rounded MT Bold', // Usar fuente redondeada
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  sectionImage: {
    width: '90%',
    height: 180,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  imageCaption: {
    color: '#FFF',
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 14,
  },
  conclusionTitle: {
    color: '#FFD700',
    fontSize: 24,
    textAlign: 'center',
  },
  funFactBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  funFactTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  factBubble: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
  },
  factText: {
    color: '#FFF',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default DetailScreen;