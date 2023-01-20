import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bnts:{
        backgroundColor: '#BA68C8',
        width: 350,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 10,
    },
    header:{
        backgroundColor: '#131313',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    img:{
        width: 300,
        height: 300,
    },
    title:{
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    },
    bntTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 10,
    },  
    menu:{
        backgroundColor: '#DDD',
        padding: 12,
        height: 500,
        alignItems: 'center'
    },

});