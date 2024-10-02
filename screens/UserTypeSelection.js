import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export function UserTypeSelection({ navigation }) {
  const [isRegistered, setIsRegistered] = useState(false);

  function handleLocateurPress() {
    if (isRegistered) {
      navigation.navigate('LocateurScreen');
    } else {
      navigation.navigate('InscriptionScreen', { userType: 'locateur' });
    }
  }

  function handleConsommateurPress() {
    if (isRegistered) {
      navigation.navigate('ConsommateurScreen');
    } else {
      navigation.navigate('InscriptionScreen', { userType: 'consommateur' });
    }
  }

  function handleVisitorPress() {
    if (isRegistered) {
      navigation.navigate('ProductsList');
    } else {
      // Si l'utilisateur n'est pas enregistré, il sera redirigé vers la page "ProductsList"
      navigation.navigate('ProductsList');
    }
  }

  return (
    <ImageBackground
      source={require('../assets/products/background-image.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Choisissez :</Text>
        <TouchableOpacity style={styles.button} onPress={handleLocateurPress}>
          <Text style={styles.buttonText}>Locateur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleConsommateurPress}>
          <Text style={styles.buttonText}>Consommateur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleVisitorPress}>
          <Text style={styles.buttonText}>Continuer en tant que visiteur</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#FFF',
    fontFamily: 'Richard Samuels',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
