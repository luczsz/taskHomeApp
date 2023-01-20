import React, { useState, useContext, useEffect } from 'react';
import { View,Text, TouchableOpacity, TextInput, Keyboard, Alert, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';

import { styles } from './style';
import firebase from '../../services/firebaseConnetion';

import { week } from '../../components/list';
import WeekList from '../../components/WeekList';

// Tipo, pontos, descrição, data, user

export default function AddTask() {

    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const casa = user.casa;
    const [data, setData] = useState(format( new Date(), 'EEEE' ));

    const [ pontos, setPontos ] = useState(0);
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    useEffect( ()=> {
        Pontos();
    },[]);


    function Semana(){
        if (data === 'Sunday') {
            setData('Domingo')
            Pontos();
        }
        if (data === 'Monday') {
            setData('Segunda')
            Pontos();
        }
        if (data === 'Tuesday') {
            setData('Terça')
            Pontos();
        }
        if (data === 'Wednesday') {
            setData('Quarta')
            Pontos();
        }
        if (data === 'Thursday') {
            setData('Quinta')
            Pontos();
        }
        if (data === 'friday') {
            setData('Sexta')
            Pontos();
        }
        if (data === 'Saturday') {
            setData('Sábado')
            Pontos();
        }
    };
    
   function Pontos(){
        let numer_ramdom = Math.random();
        numer_ramdom = Math.floor( numer_ramdom * 99);
        setPontos(numer_ramdom);
    };

    function adicionar(){
        Keyboard.dismiss();
        if(type === ''){
            alert('Preencha todos os campos');
            return;
        }
        Alert.alert(
            'Confirmando informações',
            `Você deseja adicionar a tarefa "${type}"?`,
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
        let key = firebase.database().ref('casa').child(uid).push().key;

        await firebase.database().ref('casa').child(casa).child(key).set({
            tipo: type,
            descript: description,
            pontos: pontos,
            data: data,
            casa: casa,
        });

        alert('Adicionado com sucesso');
        navigation.navigate('Home');

    };

    function weekName(data){
       setData(data.day);
    };
    

 return (
   <View style={styles.container} >
        <View style={styles.header}>

            <TouchableOpacity
                style={styles.backButton}
                onPress={ () => navigation.goBack() }
            >
                <Feather name="arrow-left-circle" size={33} color='#BA68C8' />
            </TouchableOpacity>

            <Text style={styles.title}>VOLTAR</Text>
            
            <View style={styles.SubMit}>
                <TouchableOpacity 
                style={styles.submitBnt}
                onPress={ ()=> adicionar() }
                >
                <Feather name="send" size={24} color="#DDD" />
                </TouchableOpacity>
            </View>


        </View>
        <View style={styles.content}>

            <View style={styles.order}>
                <Text style={styles.orderTxt} >
                    {user.nome}
                </Text>
                <Text style={styles.orderTxt} >
                    {data}
                </Text>
            </View>
            
            <View style={styles.list} >
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={week}
                key={ (item) => item.id}
                renderItem={ 
                    ({item}) => 
                    <WeekList data={item} dayWeek={ weekName } />
                 }
            />
            </View>


            <TextInput
                style={styles.input}
                placeholder='Insira aqui o tipo'
                placeholderTextColor={'#FFF'}
                returnKeyType='next'
                onSubmitEditing={ () => Keyboard.dismiss() }
                value={type}
                onChangeText={ (text) => setType(text)}
            />
            <Text style={styles.pointsTxt} >
                Está tarefa vale: {pontos} points
            </Text>
            <View style={styles.inputDes}>
                <TextInput
                    style={styles.inputs}
                    multiline
                    numberOfLines={4}
                    placeholder='Insira aqui sua descrição'
                    placeholderTextColor={'#FFF'}
                    returnKeyLabel='next'
                    onSubmitEditing={ () => Keyboard.dismiss() }
                    value={description}
                    onChangeText={ (text) => setDescription(text)}

                   
                />
            </View>
            
        
        
        </View>
   </View>
  );
}