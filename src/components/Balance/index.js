import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance() {
 return (
   <View style={styles.container} >
        
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currenceSymbol}>R$</Text>
                    <Text style={styles.balance}>100,00</Text>
                </View>
        </View>
  
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currenceSymbol}>R$</Text>
                    <Text style={styles.expances}>200,00</Text>
                </View>
        </View>
        
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fafafa',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 4,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,
    },
    itemTitle: {
      fontSize: 22,
      color: '#c4c4c4',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    currenceSymbol:{
      color: '#c4c4c4',
      marginRight: 6,
    }, 
    balance:{
      fontSize: 22,
      color: '#2ecc71',
    },
    expances:{
      fontSize: 22,
      color: '#e74c3c'
    }
  });