import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    inputView:{
        //backgroundColor: 'black',
        marginStart: 12,
        marginEnd: 12,
        paddingEnd: 12,
        paddingStart: 12,
        height: 60,
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input:{
        flex: 1,
        backgroundColor: '#DDD',
        height: 50,
        padding: 14,
        borderRadius: 12,
        marginRight: 12,
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
    }
})