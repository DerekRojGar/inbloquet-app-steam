import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  Image,
  BackHandler,
  ImageBackground 
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import steamDataJson from '../data/steamData.json';
import { getImageSource } from '../utils/imageMappings';
import DetailScreen from './DetailScreen';

const SteamScreen = ({ setCurrentScreen }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof steamDataJson>('S');
  const [searchQuery, setSearchQuery] = useState('');
  const [steamData, setSteamData] = useState(steamDataJson);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (selectedItem) {
          setSelectedItem(null);
          return true;
        } else {
          setCurrentScreen('Home');
          return true;
        }
      }
    );
    return () => backHandler.remove();
  }, [selectedItem]);

  const filteredContent = steamData[activeTab].content.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedItem) {
    return (
      <DetailScreen 
        itemData={selectedItem} 
        color={steamData[activeTab].color}
        goBack={() => setSelectedItem(null)}
      />
    );
  }

  return (
    <ImageBackground
      backgroundColor="000"
      style={globalStyles.container}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar en STEAM..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

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
            onPress={() => setActiveTab(tab as keyof typeof steamDataJson)}
          >
            <Image
              source={getImageSource(steamData[tab].icon)}
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
            onPress={() => setSelectedItem(item)}
          >
            <Image 
              source={getImageSource(item.image)} 
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
                <Text style={styles.exploreText}>Leer artículo →</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000'
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: '#FFF'
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFF'
  },
  tabButton: {
    minWidth: 82,
    height: 90,
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    paddingHorizontal: 5
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
    backgroundColor: '#FFF'
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    width: '95%',
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
    fontSize: 14,
    color: '#000'
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