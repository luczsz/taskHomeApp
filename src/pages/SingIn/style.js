import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313'
    }, 
    title:{
        color:'#DDD',
        fontSize: 22,
        fontWeight: 'bold',
    },
    header:{
        marginTop: 40,
        padding: 14,
        borderWidth: 1,
        borderBottomColor: '#BA68C8',
    },
    content:{
        flex: 1,
        //backgroundColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor: 'rgba(0,0,0,0.20)',
        width: 350,
        height: 45,
        marginBottom: 10,
        padding: 12,
        borderRadius: 10,
        color:'#FFF',
        borderWidth: 1,
        borderBottomColor: '#BA68C8',
    },
    bntEntrar:{
        backgroundColor: '#BA68C8',
        width: 350,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    txtBnt:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bntCadastrar:{
        marginTop: 14,
        height: 40,
    },

});