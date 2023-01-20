import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313',
    }, 
    header:{
        marginTop: 32,
        //backgroundColor: '#DDD',
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomColor: '#BA68C8'
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#DDD',
    },
    addBnt:{
        backgroundColor: '#BA68C8',
        width: 55,
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backBnt:{
        backgroundColor: '#BA68C8',
        width: 55,
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        marginTop: 80,
    },  
    input:{
        //backgroundColor: '#DDD',
        width: 380,
        height: 40,
        padding: 10,
        marginTop: 21,
        borderRadius: 12,
        borderWidth: 1,
        borderBottomColor: '#BA68C8',
        color: '#FFF'
    },  
    category:{
        padding: 14,
        marginTop: 25,
        flexDirection: 'row',
        width: 380,
        //backgroundColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sald:{
        backgroundColor: '#00b94a',
        marginRight: 20,
        padding: 8,
        borderRadius: 12,
    },
    gast:{
        backgroundColor:'#C62c36',
        padding: 8,
        borderRadius: 12,
    },
    sText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF'
    },
});