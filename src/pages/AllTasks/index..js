import React, {useState, useEffect, useContext} from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './style';
import firebase from '../../services/firebaseConnetion';

//import TasksList from '../../components/TasksList';
import AllTasksList from '../../components/AllTasksList';

import { AuthContext } from '../../contexts/auth';

export default function AllTasks() {

  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);
  const uid = user && user.uid; 
  const casa = user.casa;

  useEffect( () => {
    async function loadTasks(){

      await firebase.database().ref('casa')
      .child(casa)
      .orderByChild('casa').equalTo(casa)
      .limitToLast(10)
      .on('value', (snap)=> {
        setTasks([]);

        snap.forEach( (childItem) =>{
          let list ={
            key: childItem.key,
            tipo: childItem.val().tipo,
            casa: childItem.val().casa,
            descript: childItem.val().descript,
            pontos: childItem.val().pontos,
            data: childItem.val().data,
          };

          setTasks(oldArray => [...oldArray, list].reverse());
        })
      })

    };
    loadTasks();
  },[])


 return (
   <View style={styles.container}>

    <View style={styles.header}>
      <Text style={styles.title} >Todas as tarefas</Text>
    </View>

    <View style={styles.content} >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <AllTasksList data={item} />
        }
        />
    </View>

   </View>
  );
}