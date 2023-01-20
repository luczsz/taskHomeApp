import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './style';

export default function TasksList({data, deleteItem}) {
 return (
   <TouchableOpacity
    style={styles.container}
    onPress={ () => deleteItem(data) }>
        <View style={styles.viewPnts} >
            <Text style={styles.typeTxt}>
             {data.pontos} 
            </Text>
            <Text style={{color: '#FFF'}}>
                Pontos
            </Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1}>
                 {data.tipo}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2} >
                 {data.descript}
            </Text>
        </View>
        <View style={styles.footer} >
            <Text>
            <Feather name="bookmark" size={50} color="#BA68C8" />
            </Text>
        </View>


   </TouchableOpacity>
  );
}