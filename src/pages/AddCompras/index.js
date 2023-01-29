import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import ListaCompras from '../../components/ListasCompras'

import { styles } from './style';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import * as SQLite from 'expo-sqlite';

function OpenDB(){
    const db = SQLite.openDatabase("testeDB");
    return db;
}

const db = OpenDB();


export default function AddCompras() {

    const [nome, setNome] = useState('');
    const [numb, setNumb] = useState(0);
    const [number, setNumber] = useState(0);
    const [compras, setCompras] = useState([]);

    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists compras (id integer primary key, titulo TEXT)"
        );
    })

    useEffect( () => {
        var hasUser = false;
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM compras",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if(len > 0){
                        hasUser = true;
                        console.log('existem:' + results.rows.length + 'registros');
                        setNumb( results.rows.length );
                        Registros();
                    }
                    else{
                        console.log('sem registros14');
                        console.log(results);
                    }
                }
            );
        })
    }, [])

    function Registros(){
       db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM compras",
            [],
            (_, {rows}) => {
                setCompras([]);

                rows._array.forEach( (childItem) =>{
                    let list ={
                        id: childItem.id,
                        compras: childItem.titulo,
                    }
                    setCompras(oldArray => [...oldArray, list])
                })
            }
        ) 
       })
    };

    function addList(){
        setNumb(numb + 1);

        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO compras (id, titulo) values (?, ?);", [numb, nome]
            )
            Registros();
        })
    };

    function editList( data ){
       setNome(data.compras);
       setNumber(data.id);
    }

    function editeList(){
        
       Alert.alert(
        'Confirmando informações',
        `Você ira fazer o update de ${nome} com o ID: ${number}`,
        [
            {
                text: 'Cancelar',
                style: 'cancel',
            },
            {
                text: 'Continuar',
                onPress: () => upDate(nome, number)
            }
        ]
       )


    }

    function upDate( nome, number ){
       // alert(nome + number);

        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE compras SET titulo = ? WHERE ID = ?;`,
                [nome, number]
            )
        },
        (Error) => {
            console.log(Error.message);
        },
        (successCallback) => {
            console.log('Deu Certo.');
            Registros();
        }
        )
    }

    function deletList(data){
        alert(data.id);

        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM compras WHERE ID = ?;`,
                [data.id],
            )
        },
        (Error) => {
            console.log(Error.message);
        },
        (successCallback) => {
            alert('Você deletou o item');
            Registros();
        }
        
        )
    }

 return (
   <View style={styles.container} >
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder='Insira aqui'
                autoCapitalize='none'
                autoCorrect={false}
                value={nome}
                onChangeText={ (text) => setNome(text)}
            />
            <TouchableOpacity 
            style={styles.bottom}
            onPress={ () => addList() }
            >
                <AntDesign name="enter" size={24} color="#DDD" />
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.bottom}
            onPress={ () => editeList() }
            >
                <MaterialIcons name="update" size={24} color="#DDD" />
            </TouchableOpacity>
        </View>
        <View style={styles.listView}>
            <Text>Aqui jas a lista</Text>
            <Text> {numb} </Text>
            
            <FlatList
                data={compras}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => <ListaCompras data={item} upload={editList} del={deletList} /> }
            />
        </View>


   </View>
  );
}