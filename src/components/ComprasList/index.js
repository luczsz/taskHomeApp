import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

import { MaterialIcons } from '@expo/vector-icons';


export default function ComprasList( {data} ) {
 return (
   <View style={styles.container} >

        <View style={styles.texts} >

            <Text style={styles.label} >
                {data.label}
            </Text>
            
            <View style={styles.lblCatogoria}>

                <Text style={styles.valor} >
                    R$ {data.value} - 
                </Text>
                <Text style={styles.data} >
                     {data.date}
                </Text>
            </View>

            <View style={styles.lblCatogoria}>
            
                <Text style={styles.type} >
                    {data.type} - 
                </Text>
                <Text style={styles.type} >
                      {data.type}
                </Text>

            </View>



            
        </View>

        <View style={styles.bnts}>
            
            <TouchableOpacity 
            style={styles.bntsDelete}
             >
                <MaterialIcons name="delete-outline" size={40} color="#FFF" />
            </TouchableOpacity>
        </View>


   </View>
  );
}