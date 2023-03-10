import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';

import { styles } from './style';
import { MaterialCommunityIcons , FontAwesome5, AntDesign } from '@expo/vector-icons';
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
        .orderByChild('status').equalTo('aberto')
        .limitToLast(10)
        .on('value', (snap) => {
          setTasks([]);

          snap.forEach( (childItem) => {
            let list ={
              key: childItem.key,
              tipo: childItem.val().tipo,
              data: childItem.val().data,
              descript: childItem.val().descript,
              pontos: childItem.val().pontos,
              User: childItem.val().User,
              status: childItem.val().status,
            };

            setTasks(oldArray => [...oldArray, list].reverse());
          })
        })

      


    }
    loadPontos();
  },[])

  function AddTask(){
    navigation.navigate('AddTask');
  };
  function AddFinance(){
    navigation.navigate('AddFinance');
  };
  function userGo(){
    navigation.navigate('User');
  };
  function AddCompras(){
    navigation.navigate('AddCompras');
  }

  async function handleDelete(data){

    Alert.alert(
      'Aten????o!',
      `Ser??o adicionados ${data.pontos} ao seus pontos`,
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
    
    await firebase.database().ref('casa').child(casa)
    .child(data.key).update({ 
      status: 'fechado',
    })
    .then(
      async () => {
        let pontosAtuais = data.pontos + pontos;

       await firebase.database().ref('usuarios').child(uid).child('pontos').set(pontosAtuais)
      }
    )
  };



 return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        
        <View style={styles.titleView}>
          <View style={styles.contentTitle}>
              <Text style={styles.title} >Ol??,</Text>
              <Text style={styles.username} > {user.nome}</Text>
          </View> 
          <View style={styles.contentTitle}>
                <Text style={styles.points}>
                  Seus pontos s??o {pontos} ptns
                </Text>
          </View> 
        </View>

        <TouchableOpacity 
        style={styles.userBottom}
        onPress={ () => userGo()}
        >
          <AntDesign name="user" size={34} color="#BA68C8" />
        </TouchableOpacity>


      </View>
      <View style={styles.bntView}>
          <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          >
              <TouchableOpacity 
              style={styles.bottom}
              onPress={ () => AddTask() }
              >
                  <MaterialCommunityIcons name="format-list-checks" size={40} color="#BA86C8" />
                  <Text style={styles.txtBottom}>ADICIONAR TAREFAS</Text>


              </TouchableOpacity>  

              <TouchableOpacity 
              style={styles.bottom}
              onPress={ () => AddFinance() }
              >
                  <MaterialCommunityIcons name="cash-plus" size={40} color="#BA68C8" />
                  <Text style={styles.txtBottom}>ADICIONAR DESPESAS</Text>
              </TouchableOpacity>   

              <TouchableOpacity 
              style={styles.bottom}
              onPress={ () => AddCompras() }
              >
                  <MaterialCommunityIcons name="shopping" size={40} color="#BA68C8" />
                  <Text style={styles.txtBottom}>LISTAS DE COMPRAS</Text>
              </TouchableOpacity>   
          </ScrollView>


      </View>
      <View style={styles.listView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) => <TasksList data={item} deleteItem={ handleDelete } />}
          />
      </View>



    </View>
  );
}