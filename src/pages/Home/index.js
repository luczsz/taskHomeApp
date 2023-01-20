import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './style';
import { MaterialCommunityIcons , FontAwesome5 } from '@expo/vector-icons';
import TasksList from '../../components/TasksList';
import { format, isBefore } from 'date-fns';

import firebase from '../../services/firebaseConnetion';
import { tasq } from '../../components/list';
import { useNavigation } from '@react-navigation/native';


import { AuthContext } from '../../contexts/auth';

export default function Home() {

  const navigation = useNavigation();

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const casa = user.casa;

  const [pontos, setPontos] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [ newDate, setNewDate] = useState(format(new Date(), 'EEEE'));
  const [date, setDate] = useState('');
  

  useEffect( () => {

    async function loadPontos(){
      await firebase.database().ref('usuarios').child(uid).on('value', (snap) =>
        {setPontos(snap.val().pontos);});

        await firebase.database().ref('casa')
        .child(casa)
        .orderByChild('data').equalTo(newDate)
        .limitToLast(10)
        .on('value', (snap) => {
          setTasks([]);
          Semana();

          snap.forEach( (childItem) => {
            let list ={
              key: childItem.key,
              tipo: childItem.val().tipo,
              data: childItem.val().data,
              descript: childItem.val().descript,
              pontos: childItem.val().pontos,
              User: childItem.val().User,
            };

            setTasks(oldArray => [...oldArray, list].reverse());
          })
        })

      


    }
    loadPontos();
  },[])

  function Semana(){
    if (newDate === 'Sunday') {
        setDate('Domingo')
    }
    if (newDate === 'Monday') {
        setDate('Segunda')
    }
    if (newDate === 'Tuesday') {
        setDate('Terça')  
    }
    if (newDate === 'Wednesday') {
        setDate('Quarta')
    }
    if (newDate === 'Thursday') {
        setDate('Quinta')
    }
    if (newDate === 'friday') {
        setDate('Sexta')
    }
    if (newDate === 'Saturday') {
        setDate('Sábado')
    }
  };

  function AddTask(){
    navigation.navigate('AddTask');
  };
  function AddFinance(){
    navigation.navigate('AddFinance');
  };

  async function handleDelete(data){

    Alert.alert(
      'Atenção!',
      `Serão adicionados ${data.pontos} ao seus pontos`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => deletSucess(data)
        }
      ]
    )
    
  };

  async function deletSucess(data){
    await firebase.database().ref('casa')
    .child(casa).child(data.key).remove()
    .then( async () => {
      let pontosAtuais = data.pontos + pontos;

      await firebase.database().ref('usuarios').child(uid).child('pontos').set(pontosAtuais)
      
    })
  };



 return (
   <View style={styles.container}>
      <View style={styles.header}> 
          
          
        <View >
            <Text style={styles.title}> 
                TASK HOUSE
            </Text>
            <Text style={styles.subtitle}> 
              Olá, {user.nome} 
            </Text>
        </View>
          
          
          <View style={styles.point} >
            <Text style={styles.title} >PONTOS</Text>
            <Text style={styles.subtitle}> {pontos} pnts </Text>
          </View>


      </View>

      
      <View style={styles.content}>
          
          <Text style={styles.titleGeral} >S U M A R I O</Text>
          
          <View style={styles.boxBnt}>
              <View style={{ flexDirection: 'column' }} >
                  <TouchableOpacity
                   style={styles.bottom}
                   onPress={ () => AddTask() }
                  >
                  <MaterialCommunityIcons name="format-list-checks" size={40} color="#BA86C8" />
                      <Text style={styles.txtBottom}>T A R E F A S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bottom} 
                  onPress={ () => alert('Em construção') }
                  >
                  <MaterialCommunityIcons name="cash-plus" size={40} color="#BA68C8" />
                <Text style={styles.txtBottom}>
                  D E S P E S A S
                </Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.bottom2} onPress={ () => alert('Em construção') } >
              <MaterialCommunityIcons name="shopping" size={40} color="#BA68C8" />
                <Text style={styles.txtBottom}>
                  L I S T A S   D E            C O M P R A S
                </Text>
              </TouchableOpacity>
          </View>

          <Text style={styles.titleGeral} >
            T A R E F A S   D E  H O J E
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) => <TasksList data={item} deleteItem={handleDelete} /> }
          />

      </View>
   </View>
  );
}