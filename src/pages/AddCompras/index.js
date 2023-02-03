import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './style';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function AddCompras() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>
        <View style={styles.header}>

            <TouchableOpacity
                style={styles.bottom}
                onPress={ () => navigation.goBack() }
            >
                <MaterialCommunityIcons name="arrow-left-circle-outline" size={36} color="#BA68C8" />
            </TouchableOpacity>

            <Text style={styles.title} >
                A D I C I O N A R
            </Text>

                <TouchableOpacity
                    style={styles.bottom}
                >
                    <Ionicons name="ios-enter" size={36} color="#BA68C8" />
                </TouchableOpacity>

        </View>

        <View style={styles.content}>

            <View style={styles.inputView}>
                
                <TextInput
                    placeholder='Insira aqui o nome'
                    style={styles.input}
                />
                
                <View style={styles.contentInput}>
                    <TextInput
                        placeholder='Tipo: Cozinha'
                        style={styles.inputCont}
                    />
                    <TextInput
                        placeholder='Valor: 20,00'
                        style={styles.inputCont}
                    />
                </View>


            </View>

        </View>
        
   </View>
  );
}