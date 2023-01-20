import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native';
import { styles } from './style';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { add, format } from 'date-fns';
import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnetion';

export default function AddFinance() {

    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [valor, setValor] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState(format( new Date(), 'EEEE' ));
    const { user } = useContext(AuthContext);

    function Semana(){
        if (date === 'Sunday') {
            setDate('Domingo')
            
        }
        if (date === 'Monday') {
            setDate('Segunda')
            
        }
        if (date === 'Tuesday') {
            setDate('Terça')
            
        }
        if (date === 'Wednesday') {
            setDate('Quarta')
            
        }
        if (date === 'Thursday') {
            setDate('Quinta')
            
        }
        if (date === 'friday') {
            setDate('Sexta')
            
        }
        if (date === 'Saturday') {
            setDate('Sábado')
            
        }
    };
    Semana();
    function adicionar(){
        Keyboard.dismiss();
        if(type === ''){
            alert('Preencha todos os campos');
            return;
        }
        Alert.alert(
            'Confirmando informações',
            `Você deseja adicionar a tarefa "${type}" - ${valor} - ${title}- ${date}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => add()
                }
            ] 
        )
    };
    async function add(){
        let uid = user.uid;
        let casa = user.casa;
        let key = firebase.database().ref('Finance').child(uid).push().key;

        await firebase.database().ref('Finance').child(casa).child(key).set({
            tipo: type,
            titulo: title,
            data: date,
            valor: valor
        });

        alert('Adicionado com sucesso');
        setTitle('');
        setValor('');
        navigation.navigate('Despesas');
    }



 return (
   <View style={styles.container} >
        <View style={styles.header} >
            <TouchableOpacity 
                style={styles.backBnt}
                onPress={() => navigation.goBack()}
            >
                <MaterialCommunityIcons name="arrow-left-circle-outline" size={44} color="#DDD" />
            </TouchableOpacity>
            
            <Text style={styles.title}>
                A D I C I O N A R
            </Text>
            
            <TouchableOpacity 
                style={styles.addBnt}
                onPress={() => adicionar()}
            >
            <Feather name="send" size={24} color="#DDD" />
            </TouchableOpacity>


        </View>

        <View style={styles.content}>

            <TextInput
                style={styles.input}
                placeholder='Titulo'
                placeholderTextColor={'#FFF'}
                keyboardType='default'
                returnKeyType='next'
                onSubmitEditing={ () => Keyboard.dismiss() }
                value={title}
                onChangeText={ (text) => setTitle(text) }
                
            />
            <TextInput
                style={styles.input}
                placeholder='Valor'
                placeholderTextColor={'#FFF'}
                keyboardType='numeric'
                returnKeyType='next'
                onSubmitEditing={ () => Keyboard.dismiss() }
                value={valor}
                onChangeText={ (text) => setValor(text) }
            />

            <Text style={{ fontSize: 22}} >
                {type} 
            </Text>

            <View style={styles.category} >
                <TouchableOpacity style={styles.sald} onPress={()=> setType('Entrada')} >
                    <Text style={styles.sText}>ENTRADA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gast} onPress={()=> setType('Despesa')} >
                    <Text style={styles.sText}>DESPESA</Text>
                </TouchableOpacity>
            </View>


        </View>
   </View>
  );
}