import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext.js';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);

  function onAddToCart() {
    addItemToCart(product.id);
  }

  function onContactOwner() {
    const { locateur, contact } = product;
    const ownerEmail = contact.email;

    const message = `Hello ${locateur}, I'm interested in renting your product. Please provide me with more details.`;

    const emailUrl = `mailto:${ownerEmail}?subject=Product Inquiry&body=${encodeURIComponent(message)}`;
    Linking.openURL(emailUrl);
  }

  function onCallOwner() {
    const { locateur, contact } = product;
    const ownerPhoneNumber = contact.phone;

    const telUrl = `tel:${ownerPhoneNumber}`;
    Linking.openURL(telUrl);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={product.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>DH/JOUR {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          
          <TouchableOpacity onPress={onContactOwner} style={styles.button}>
            <View style={styles.buttonCircle}>
              <Ionicons name="mail-outline" size={20} color="white" />
            </View>
            <Text style={styles.buttonText}>Contact the landlord</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onCallOwner} style={styles.button}>
            <View style={styles.buttonCircle}>
              <Ionicons name="call-outline" size={20} color="white" />
            </View>
            <Text style={styles.buttonText}>Call the landlord</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
    justifyContent: 'center', 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
