import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js'; 
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import { UserTypeSelection } from './screens/UserTypeSelection.js';
import { LocateurScreen } from './screens/LocateurScreen.js';
import { ConsommateurScreen } from './screens/ConsommateurScreen.js';
import { InscriptionScreen } from './screens/InscriptionScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  const [userType, setUserType] = useState(null);

  function handleUserTypeSelected(selectedUserType) {
    setUserType(selectedUserType);
  }

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UserTypeSelection">
            {(props) => (
              <UserTypeSelection
                {...props}
                onUserTypeSelected={handleUserTypeSelected}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="InscriptionScreen" component={InscriptionScreen} />
          <Stack.Screen name="LocateurScreen" component={LocateurScreen} />
          <Stack.Screen name="ConsommateurScreen" component={ConsommateurScreen} />
          <Stack.Screen name="ProductsList" component={ProductsList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default App;
