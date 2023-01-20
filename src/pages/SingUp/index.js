import React, {useState, useContext} from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { styles } from '../SingIn/style';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


import { AuthContext } from '../../contexts/auth';

export default function SingUp() {

  const { singUp, loadingAuth } = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [ casa, setCasa ] = useState('');

  function Cadastrar(){
    singUp(email, senha, nome, casa);
  }

 return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Feather name="arrow-left-circle" size={24} color="black" />
          <Text style={styles.title}>C A D A S T R O</Text>
        </View>
        <View style={styles.content}>
            <TextInput
              placeholder='Nome'
              placeholderTextColor={'#FFF'}
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              value={nome}
              onChangeText={ (text)=> setNome(text)}
            />
            <TextInput
              placeholder='Email'
              placeholderTextColor={'#FFF'}
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              value={email}
              onChangeText={ (text) => setEmail(text)}

            />
            <TextInput
              placeholder='Nome da casa'
              placeholderTextColor={'#FFF'}
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              value={casa}
              onChangeText={ (text) => setCasa(text)}

            />
            <TextInput
              placeholderTextColor={'#FFF'}
              placeholder='Senha'
              style={styles.input}
              keyboardType={'numeric'}
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={ (text) => setSenha(text)}
            />

          <TouchableOpacity 
              activeOpacity={0.7}
              onPress={ ()=> Cadastrar()}
              style={styles.bntEntrar}>
              {
                loadingAuth ? (
                  <ActivityIndicator
                    size={20}
                    color="#FFF"
                  />
                ) : (
                  <Text style={styles.txtBnt} >CADASTRAR</Text>
                )
              }
              
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.bntCadastrar}
          onPress={ ()=> navigation.navigate('SingIn')}
          >
              <Text style={styles.txtBnt}>
                F A Ç A  L O G I N
              </Text>
          </TouchableOpacity>

        </View>
    </View>
  );
}