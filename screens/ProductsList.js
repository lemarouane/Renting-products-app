import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function ProductsList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <ImageBackground
      source={require('../assets/products/background-image.jpg')}
      style={styles.backgroundImage}
    >
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  productsList: {
    backgroundColor: 'transparent',
  },
  productsListContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
