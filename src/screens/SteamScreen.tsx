import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  TextInput, 
  Image 
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const { width } = Dimensions.get('window');

const SteamScreen = ({ setCurrentScreen }) => {
  const [activeTab, setActiveTab] = useState('S');
  const [searchQuery, setSearchQuery] = useState('');

  // Datos con rutas PNG
  const steamData = {
    S: {
      title: "Science",
      color: "#00A859",
      icon: require('../assets/icons/science.png'),
      content: [
        { 
          title: "Biología Molecular", 
          image: require('../assets/images/dna.png'),
          text: "Descubre los secretos del ADN y la genética moderna"
        },
        {
          title: "Astrofísica",
          image: require('../assets/images/space.png'),
          text: "Explora los misterios del cosmos y los agujeros negros"
        },
        { 
          title: "Biología Molecular", 
          image: require('../assets/images/dna.png'),
          text: "Descubre los secretos del ADN y la genética moderna"
        },
        {
          title: "Astrofísica",
          image: require('../assets/images/space.png'),
          text: "Explora los misterios del cosmos y los agujeros negros"
        },
        { 
          title: "Biología Molecular", 
          image: require('../assets/images/dna.png'),
          text: "Descubre los secretos del ADN y la genética moderna"
        },
        {
          title: "Astrofísica",
          image: require('../assets/images/space.png'),
          text: "Explora los misterios del cosmos y los agujeros negros"
        },
        { 
          title: "Biología Molecular", 
          image: require('../assets/images/dna.png'),
          text: "Descubre los secretos del ADN y la genética moderna"
        },
        {
          title: "Astrofísica",
          image: require('../assets/images/space.png'),
          text: "Explora los misterios del cosmos y los agujeros negros"
        }
      ]
    },
    T: {
      title: "Technology",
      color: "#2196F3",
      icon: require('../assets/icons/tech.png'),
      content: [
        {
          title: "Inteligencia Artificial",
          image: require('../assets/images/ai.png'),
          text: "Aprende sobre redes neuronales y machine learning"
        }
      ]
    },
    E: {
      title: "Engineering",
      color: "#FF5722",
      icon: require('../assets/icons/engineering.png'),
      content: [
        {
          title: "Robótica",
          image: require('../assets/images/robot.png'),
          text: "Diseña y construye robots inteligentes"
        }
      ]
    },
    A: {
      title: "Art",
      color: "#9C27B0",
      icon: require('../assets/icons/art.png'),
      content: [
        {
          title: "Diseño Digital",
          image: require('../assets/images/digital-art.png'),
          text: "Combina arte y tecnología en creaciones digitales"
        }
      ]
    },
    M: {
      title: "Math",
      color: "#3F51B5",
      icon: require('../assets/icons/math.png'),
      content: [
        {
          title: "Geometría Fractal",
          image: require('../assets/images/fractal.png'),
          text: "Descubre los patrones matemáticos de la naturaleza"
        }
      ]
    }
  };

  // Filtrar contenido basado en búsqueda
  const filteredContent = steamData[activeTab].content.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={styles.header}>        
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar en STEAM..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Selector de categorías */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {Object.keys(steamData).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              { 
                backgroundColor: activeTab === tab ? steamData[tab].color : '#FFF',
                borderColor: steamData[tab].color
              }
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Image
              source={steamData[tab].icon}
              style={styles.tabIcon}
            />
            <Text style={[
              styles.tabText,
              { color: activeTab === tab ? '#FFF' : steamData[tab].color }
            ]}>
              {steamData[tab].title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Contenido principal */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredContent.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={[
              styles.card,
              { 
                backgroundColor: steamData[activeTab].color + '20',
                borderColor: steamData[activeTab].color
              }
            ]}
          >
            <Image 
              source={item.image} 
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.text}</Text>
              <TouchableOpacity 
                style={[
                  styles.exploreButton,
                  { backgroundColor: steamData[activeTab].color }
                ]}
              >
                <Text style={styles.exploreText}>Explorar →</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000'
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333', // Oscurecida
    color: '#FFF' // Texto en blanco
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30, 
    marginBottom: 0,
  },
  tabButton: {
    width: 82,
    height: 90,
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  tabIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: 'contain'
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  contentContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingBottom: 20, 
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    width: width * 0.95,
    alignSelf: 'center'
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 8
  },
  cardTextContainer: {
    flex: 1
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  cardText: {
    fontSize: 12,
    color: '#555'
  },
  exploreButton: {
    marginTop: 5,
    padding: 5,
    borderRadius: 5
  },
  exploreText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});

export default SteamScreen;
