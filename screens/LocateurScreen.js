import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function LocateurScreen() {

  const [titreProduit, setTitreProduit] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [dateDisponibilite, setDateDisponibilite] = useState('');
  const [dateLocation, setDateLocation] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  
  function handleSave() {
    // Logique de connexion ici
  }

  function handlePhotoSelection() {
  const options = {
    title: 'Select Photos',
    mediaType: 'photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
  };

  
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veuillez remplir ces champs</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Titre du produit"
        value={titreProduit}
        onChangeText={setTitreProduit}
      />

      <TextInput
        style={styles.input}
        placeholder="Prix"
        value={prix}
        onChangeText={setPrix}
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Date de disponibilité"
        value={dateDisponibilite}
        onChangeText={setDateDisponibilite}
      />

      <TextInput
        style={styles.input}
        placeholder="Date possible de location"
        value={dateLocation}
        onChangeText={setDateLocation}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.button} onPress={handlePhotoSelection}>
        <Text style={styles.buttonText}>Select Photos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  textarea: {
    height: 80,
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
