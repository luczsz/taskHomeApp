import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313',
    },
    header:{
        marginTop: 32,
        //backgroundColor: '#DDD',
        height: 85,
        paddingStart: 12,
        paddingEnd: 12,
        justifyContent: 'center',
        borderWidth: 1,
        borderBottomColor: '#BA68C8',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',

    },
    content:{
        flex: 1,
        backgroundColor: 'green',
        paddingStart: 14,
        paddingEnd: 14,
        marginTop: 20,
    }
})