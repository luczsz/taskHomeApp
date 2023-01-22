import React, { useState, useContext, useEffect } from 'react';
import { View,Text, TouchableOpacity, TextInput, Keyboard, Alert, FlatList } from 'react-native';

import { Feather, Ionicons } from '@expo/vector-icons';
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
    const [dat, setDat] = useState('');
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
            status: 'aberto',
        });

        alert('Adicionado com sucesso');
        navigation.navigate('Home');

    };

    function weekName(data){
        setData(data.day);
        setDat('O seu dia escolhido foi: ' + data.type);
        
    };
    

 return (
   <View style={styles.container} >
       
        <View style={styles.header}>
            <TouchableOpacity
                onPress={ () => navigation.goBack()}
            >
                <Feather name="arrow-left-circle" size={36} color='#BA68C8' />
            </TouchableOpacity>
            <Text style={styles.title}>CRIAR NOVA TAREFA
            </Text>
            <TouchableOpacity
                onPress={ ()=> adicionar() }
            >
                <Ionicons name="ios-enter" size={36} color="#BA68C8" />
            </TouchableOpacity>
        </View>

        <View style={styles.textView} >
            <TextInput
               style={styles.input}
               placeholder='Insira aqui o tipo'
               placeholderTextColor={'#FFF'}
               returnKeyType='next'
               onSubmitEditing={ () => Keyboard.dismiss() }
               value={type}
               onChangeText={ (text) => setType(text)}
            />

            <FlatList
                style={styles.listView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={week}
                key={ (item) => item.id}
                renderItem={ 
                    ({item}) => 
                    <WeekList data={item} dayWeek={ weekName } />
                 }
            />
            <Text style={styles.title}> {dat} </Text>
        </View>

        <View style={styles.content}>
            <View style={styles.points}>
                <Text style={styles.titlePoints}> Pontos para a atividade: {pontos} </Text>

                 <TouchableOpacity
                    onPress={() => Pontos()}
                 >
                     <Ionicons name="ios-refresh-circle-sharp" size={40} color="#FFF" />
                 </TouchableOpacity>
            </View>
            <View style={styles.contentDescr} >
                    <TextInput
                            style={styles.inputPoints}
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