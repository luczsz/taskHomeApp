import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: '#131313', 
    },
    header:{
       marginTop: 55,
       padding: 10,
       flexDirection: 'row',
    },
    backButton:{

    },
    title:{
      fontSize: 22,
      color: '#FFF',
      fontWeight: 'bold',
      marginLeft: 12,
    },
    order:{
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 380,
      //height: 50,
      //backgroundColor: '#DDD',
      padding: 10,
    },  
    orderTxt:{
      fontWeight: 'bold',
      fontSize: 18,
      
    },
    pointsTxt:{
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
      marginTop: 14,
    },
    content:{
      flex: 1,
      //backgroundColor: '#FFF',
      alignItems: 'center',
    },
    cntTitle:{},
    input:{
      marginTop: 20,
      //backgroundColor: '#DDD',
      height: 40,
      width: 380,
      borderRadius: 12,
      padding: 12,
      borderWidth: 1,
      borderBottomColor: '#DDD',
      color: '#FFF',
    },
    inputs:{
      //backgroundColor: '#DDD',
      height: 40,
      padding: 12,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      color: '#FFF',
    },   
    inputDes:{
      marginTop: 20,
      height: 100,
      width: 380,
      //backgroundColor: '#DDD',
      borderRadius: 12,
      borderWidth: 1,
      borderBottomColor: '#DDD',
    },
    submitBnt:{
      backgroundColor: '#BA68C8',
      width: 55,
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:  12,

    },
    submitTxt:{
      fontWeight: 'bold',
      fontSize: 22,
      color: '#FFF',
    },
    bnts:{
      //flex:1,
      height: 160,
      //backgroundColor: '#DDD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list:{
      //backgroundColor: '#DDD',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SubMit:{
//      backgroundColor: '#FFF',
      width: 260,
      alignItems: 'flex-end',
      justifyContent: 'center',

    },  

});