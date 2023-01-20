import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Moviments( {data} ) {
    const [showValue, setshowValue] = useState(false);



 return (
  <TouchableOpacity style={styles.container} onPress={ () => setshowValue(!showValue) }>
    <Text style={styles.label}>{data.titulo}</Text>


    <View style={styles.content}>
    <Text style={styles.data}>{data.data}</Text>

    { showValue ? (
     <Text style={data.tipo === 'Entrada' ? styles.value : styles.expansens}>
        
          {data.tipo === 'Entrada' ?  `R$ ${data.valor}` : `R$ -${data.valor}` }

     </Text>
    ) : (
        <View style={styles.skeleton}></View>
    )}
  
    </View>

  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: '#c4c4c4',
      backgroundColor: '#F5F5F8FE',
      padding: 8
    },
    label:{
        fontSize: 16,  
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    data:{
        marginRight: 6,
        fontSize: 16,
        color: '#c4c4c4',
    },
    value:{
        marginRight: 6,
        fontSize: 16,
        color: '#2ecc71'
    },
    expansens:{
        marginRight: 6,
        fontSize: 16,
        color: '#e74c3c'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
  });

  