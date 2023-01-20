import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
        
        <AuthProvider>
          <StatusBar backgroundColor='#131313' style='light'/>
          <Routes/> 
        </AuthProvider> 
    </NavigationContainer>
   
  );
}

