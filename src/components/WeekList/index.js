import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';



export default function WeekList({data, dayWeek}) {
 return (
   <TouchableOpacity style={styles.container} onPress={ () => dayWeek(data) } >
        <Text style={styles.txtContainer} >
           { data.type }
        </Text>
   </TouchableOpacity>
  );
}