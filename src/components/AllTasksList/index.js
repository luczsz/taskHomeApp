import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AntDesign, Feather } from '@expo/vector-icons';

import { styles } from './style';

export default function AllTasksList({ data }) {
 return (
   <View style={styles.container} >
        <View style={styles.ContainerText} > 
            <Text style={styles.title} > 
                {data.tipo}
            </Text>
            <Text style={styles.descriptionTitle} numberOfLines={1}> 
                Pontos perdidos {data.pontos} pnts.
            </Text>
            <Text style={styles.descriptionTitle} numberOfLines={1}> 
                Situação: {data.status}.
            </Text>
        </View>
        <View style={styles.bottomView}>
            <TouchableOpacity
                style={styles.bottomCancel}
                activeOpacity={0.9}
                onPress={ ()=> alert('em teste')}
            >
                <AntDesign name="closecircleo" size={34} color="#DDD" />
            </TouchableOpacity>
        </View>

   </View>
  );
}