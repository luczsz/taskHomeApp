import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native';
import { styles } from './style';

import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { add, format } from 'date-fns';
import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnetion';

export default function AddFinance() {

    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [valor, setValor] = useState(0);
    const [type, setType] = useState('');
    const [date, setDate] = useState(format( new Date(), 'EEEE' ));
    const { user } = useContext(AuthContext);
    const uid = user.uid;
    const [saldo, setSaldo] = useState(0);
    const [gasto, setGasto] = useState(0);


    const [entrada, setEntrada] = useState(0);
    const [despesa, setDespesa] = useState(0);
    const [total, setTotal] = useState(0);
    
    useEffect( () => {
        async function loadFinance(){
            await firebase.database().ref('usuarios').child(uid).on('value', (snap) => {
                setSaldo(snap.val().saldo);
                setGasto(snap.val().gasto);
            })
        }
        loadFinance();
    },[] )
    

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

        await firebase.database().ref('usuarios').child(uid).update({
            saldo: entrada,
            gasto: despesa,
            total: total,
        })

        alert('Adicionado com sucesso');
        setTitle('');
        setValor('');
        navigation.navigate('Despesas');
    };

    function subEntrada(){
        let Tsoma = parseFloat(saldo) + parseFloat(valor);
        let Ttotal = Tsoma - gasto;
        
        setTotal( Math.round(Ttotal) );
        setDespesa(gasto);
        setEntrada( Math.round(Tsoma));
        setType('Entrada');
    };

    function subDespesa(){
        let Tsub = parseFloat(gasto) + parseFloat(valor);
        let Ttotal = saldo - Tsub;

        setTotal(Math.round(Ttotal));
        setDespesa( Math.round(Tsub));
        setEntrada(saldo);
        setType('Despesa');
    };



 return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity 
                style={styles.backBnt}
                onPress={() => navigation.goBack()}
            >
                <MaterialCommunityIcons name="arrow-left-circle-outline" size={36} color="#BA68C8" />
            </TouchableOpacity>   

            <Text style={styles.title}>
                A D I C I O N A R
            </Text>

            <TouchableOpacity 
                style={styles.addBnt}
                onPress={() => adicionar()}
            >
            <Ionicons name="ios-enter" size={36} color="#BA68C8" />
            </TouchableOpacity>

        </View>
        <View style={styles.inputView}>
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
        </View>
        <View style={styles.content}>
            <View style={styles.status}>
                <View style={styles.boxStatus} >
                    <Text>Seu saldo atual:</Text>
                    <Text> R$ {saldo} </Text>
                </View>
                <View style={styles.boxStatus} >
                    <Text>Seu gasto atual: </Text>
                    <Text> R$ {gasto} </Text>
                </View>
            </View>
            <View style={styles.status}>
                <View style={styles.boxStatus} >
                    <Text>ENTRADA:</Text>
                    <Text>R$ {entrada} </Text>
                </View>
                <Text>-</Text>
                <View style={styles.boxStatus} >
                    <Text>DESPESA:</Text>
                    <Text>R$ {despesa} </Text>
                </View>
                <Text>=</Text>
                <View style={styles.boxStatus} >
                    <Text>TOTAL</Text>
                    <Text>R$ {total}</Text>
                </View>
                
            </View>

            <TextInput
                style={styles.inputContent}
                placeholder='Valor'
                placeholderTextColor={'black'}
                keyboardType='numeric'
                returnKeyType='next'
                onSubmitEditing={ () => Keyboard.dismiss() }
                value={valor}
                onChangeText={ (text) => setValor(text) }
            />

            <View style={styles.category} >
                <TouchableOpacity style={styles.sald} onPress={()=> subEntrada() } >
                    <Text style={styles.sText}>ENTRADA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gast} onPress={()=> subDespesa() } >
                    <Text style={styles.sText}>DESPESA</Text>
                </TouchableOpacity>
            </View>


        </View>
    </View>
  );
}