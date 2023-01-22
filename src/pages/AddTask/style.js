import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: '#131313', 
    },
    header:{
      //backgroundColor: '#DDD',
      marginTop: 32,
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingStart: 14,
      paddingEnd: 14,
      flexDirection: 'row',
    },
    title:{
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
      //marginLeft: 22,
    },  
    textView:{
//      backgroundColor: '#DDD',
      marginStart: 14,
      paddingStart: 10,
      marginEnd: 14,
      paddingEnd: 10,
      height: 170,
      marginTop: 10,
    },
    input:{
      color: '#FFF',
      height: 60,
      padding: 10,
      fontSize: 18,
      marginBottom: 10,
      borderBottomColor: '#BA68C8',
      borderWidth: 1,
      borderRadius: 12,
    },
    content:{
      flex: 1,
      backgroundColor: '#BA68C8',
      marginTop: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingStart: 14,
      paddingEnd: 14,
      paddingTop: 10,
    },
    points:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titlePoints:{
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputPoints:{
      color: '#FFF',
      height: 110,
      padding: 10,
      fontSize: 18,
      borderBottomColor: '#FFF',
      borderColor: '#BA68C8',
      borderWidth: 1,
      borderRadius: 12,
    },
    contentDescr:{
      flex: 1,
      //backgroundColor: '#DDD',
    },
    contentBnts:{
      height: 100,
      //backgroundColor: '#DDD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottm:{
      backgroundColor: '#FFF',
      width: 360,
      height: 60,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    bottmText:{
      color: '#BA68C8',
      fontSize: 20,
      fontWeight: 'bold',
    },
    listView:{
    },

});