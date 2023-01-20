import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { styles } from './style';
import { AntDesign, SimpleLineIcons  } from '@expo/vector-icons';

export default function UserCont() {

    const { user, singOut } = useContext(AuthContext);

 return (
   <View style={styles.container}>
      <View style={styles.header} >
          <Image
            source={{ uri: 'https://stories.freepiklabs.com/storage/67752/thesis-rafiki-8932.png' }}
            style={styles.img}
          />
          <Text style={styles.title}>
           Olá, {user.nome} 
          </Text>
          <Text style={styles.title}>
             Sua Casa: {user.casa} 
          </Text>
      </View>
      <View style={styles.menu} >

          <TouchableOpacity style={ styles.bnts} onPress={ () => alert('em construção') } > 
          <SimpleLineIcons name="present" size={24} color="#FFF" />
            <Text style={styles.bntTitle}>
              RECOMPENSAS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.bnts} onPress={ () => singOut() } > 
          <AntDesign name="logout" size={24} color="#FFF" />
            <Text style={styles.bntTitle}>
              SAIR
            </Text>
          </TouchableOpacity>


      </View>

  
        
   </View>
  );
}