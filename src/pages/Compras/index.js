import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './style';
import { compras } from '../../components/list';
import ComprasList from '../../components/ComprasList';

export default function Compras() {
 return (
   <View style={styles.container}>
        <View style={styles.header} >
            <Text style={styles.title}>
                C O M P R A S
            </Text>
        </View>
        <View style={styles.content} >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={compras}
                keyExtractor={ (item) => item.id}
                renderItem={ ({item}) => <ComprasList data={item} /> }
            />
        </View>
   </View>
  );
}