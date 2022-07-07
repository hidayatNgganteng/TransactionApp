import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionList from '../screens/transactionList';
import TransactionDetails from '../screens/transactionDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionList} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
