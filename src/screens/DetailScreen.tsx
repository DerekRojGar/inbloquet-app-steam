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
    <View style={globalStyles.container}>
      <View style={[styles.header, { backgroundColor: color }]}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image 
          source={getImageSource(blogContent.headerImage)} 
          style={styles.headerImage}
          resizeMode="cover"
        />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.metaContainer}>
            <Text style={styles.metaText}>Autor: {itemData.author}</Text>
            <Text style={styles.metaText}>Publicado: {itemData.date}</Text>
          </View>
        </View>

        {blogContent.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
            {section.image && (
              <Image 
                source={getImageSource(section.image)} 
                style={styles.sectionImage}
                resizeMode="contain"
              />
            )}
          </View>
        ))}

        {blogContent.conclusion && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conclusión</Text>
            <Text style={styles.sectionContent}>{blogContent.conclusion}</Text>
          </View>
        )}

        {blogContent.references && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Referencias</Text>
            {blogContent.references.map((ref, idx) => (
              <Text key={idx} style={styles.reference}>• {ref}</Text>
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
    padding: 15,
    elevation: 5,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  metaText: {
    color: '#FFF',
    fontSize: 14,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#bdc3c7',
    paddingBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#FFF',
    lineHeight: 24,
    textAlign: 'justify',
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 15,
  },
  reference: {
    fontSize: 14,
    color: '#7f8c8d',
    marginLeft: 15,
    lineHeight: 22,
  },
});

export default DetailScreen;