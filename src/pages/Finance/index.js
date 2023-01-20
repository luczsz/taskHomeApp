import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { styles } from './style';

import { list }  from '../../components/list';
import firebase from '../../services/firebaseConnetion';
import { AuthContext } from '../../contexts/auth';

import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';

export default function Finance() {

    const { user } = useContext(AuthContext);
    const uid = user.uid;
    const casa = user.casa;
    const [extrato, setExtrato] = useState([]);

    useEffect(()=>{

        async function loadDate(){
            await firebase.database().ref('Finance').child(casa).on('value', (snap) => {
                setExtrato([]);
    
                snap.forEach( (childItem) => {
                    let list ={
                        key: childItem.key,
                        tipo: childItem.val().tipo,
                        data: childItem.val().data,
                        titulo: childItem.val().titulo,
                        valor: childItem.val().valor,
                    };

                    setExtrato(oldArray => [...oldArray, list].reverse());
                })
            })
        }
        loadDate();

    },[])


 return (
   <View  style={styles.container}>
        <View style={styles.header}  >
            <Text style={styles.title} >
                DESPESAS
            </Text>
            <View>
                <Text style={styles.title}>
                    TOTAL
                </Text>
                <Text style={styles.subTitle}>
                    R$100,00
                </Text>
            </View>
        </View>
        <Balance  />

        <Text style={{ color: 'black', fontSize: 22, padding: 14 }} >
            Últimas movimentações
        </Text>

        <FlatList
            style={styles.list}
            data={extrato}
            keyExtractor={ (item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => <Moviments data={item} /> }
        />

   </View>
  );
}