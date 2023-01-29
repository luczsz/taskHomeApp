import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function ListasCompras({data, upload, del }) {
 return (
   <View style={styles.container} >
       
        <Text style={styles.item} > 
            {data.compras}
         </Text>
        
        <Text style={styles.item}>
           {data.id} 
        </Text>

        <TouchableOpacity 
          style={styles.bottom}
          onPress={ () => upload(data) }
          >
           
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.bottom} 
          onPress={ () => del(data) }
          >
          <Feather name="trash" size={24} color="red" />
        </TouchableOpacity>
        
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "black",
    width: 350,
    flexDirection: 'row',
    marginBottom: 10,
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item:{ 
    color: '#DDD',
    marginLeft: 10,
  },
  bottom:{
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})