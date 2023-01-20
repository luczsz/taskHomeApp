import React, {useState, useContext} from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { styles } from './style';
import { useNavigation } from '@react-navigation/native';


import { AuthContext } from '../../contexts/auth';

export default function SingIn() {

  const { singIn, loadingAuth } = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Logar(){
    singIn(email, senha);
  }

 return (
   <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>L O G I N</Text>
      </View>
      <View style={styles.content}>

          <TextInput
            placeholderTextColor={'#FFF'}
            placeholder='Email'
            style={styles.input}
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />
          <TextInput
            placeholderTextColor={'#FFF'}
            placeholder='Senha'
            style={styles.input}
            keyboardType={'numeric'}
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <TouchableOpacity 
          activeOpacity={0.7}
          onPress={ ()=> Logar()}
          style={styles.bntEntrar}>
            {
              loadingAuth ? (
                <ActivityIndicator
                  size={20}
                  color="#FFF"
                />
              ) : (
                <Text style={styles.txtBnt} >ENTRAR</Text>
              )
            }
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.bntCadastrar}
          onPress={ ()=> navigation.navigate('SingUp')}
          >
              <Text style={styles.txtBnt}>C A D A S T R E - S E</Text>
          </TouchableOpacity>
          
      </View>
   </SafeAreaView>
  );
}