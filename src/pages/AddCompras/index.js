import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

export default function AddCompras() {

    const [nome, setNome] = useState('');
    const [compras, setCompras] = useState([]);

     Adicionar = async  () => {
        if(nome === ''){
            alert('Defina um nome');
            return;
        }

        try{
            const data = { nome: nome };
            
            apiTest();
            setNome('');
        }catch(err){
            alert(err);
        }
    };

    function apiTest(){
        fetch('https://startcreate.000webhostapp.com/school.php').then( (resposta) => resposta.json())
                .then( ( json ) => console.log(json) )
                .catch( ( error ) => console.log(error) )
        return;
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
            onPress={ () => Adicionar() }
            >
                <AntDesign name="enter" size={24} color="#DDD" />
            </TouchableOpacity>
        </View>
   </View>
  );
}