import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        backgroundColor: '#131313',
    },
    header:{
        //backgroundColor: '#DDD',
        marginTop: 34,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    content:{
        flex: 1,
        backgroundColor: '#DDD',
        marginTop: 12,
    },
    inputView:{
        //backgroundColor: 'black',
        marginStart: 12,
        marginEnd: 12,
        paddingEnd: 12,
        paddingStart: 12,
        height: 60,
        marginTop: 32,
//        flexDirection: 'row',
        /* alignItems: 'center',
        justifyContent: 'space-around'  */
    },
    contentInput:{
        /* backgroundColor: 'black',
        marginStart: 12,
        marginEnd: 12,
        paddingEnd: 12,
        paddingStart: 12, */
        height: 80,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    input:{
        //flex: 1,
        backgroundColor: '#FFF',
        height: 60,
        padding: 14,
        borderRadius: 12,
        marginRight: 12,
        marginTop: 10,
    },
    inputCont:{
        flex: 1,
        backgroundColor: '#FFF',
        height: 60,
        marginStart: 10,
        marginEnd: 10,
        padding: 14,
        borderRadius: 12,
       // marginRight: 12,
    },
    bottom:{
        backgroundColor: 'black',
        width: 44,
        height: 44,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    listView:{
        marginStart: 14,
        marginEnd: 14,
        backgroundColor: '#DDD',
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#DDD',
    },
})