import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313', 
    },
    header:{
        marginTop: 40,
        padding: 14,
        borderWidth: 1,
        borderBottomColor: '#BA68C8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        color: '#FFF',
        fontSize: 22,
    },
    titleGeral:{
        color: '#FFF',
        fontSize: 22,
        marginTop: 10,
        paddingLeft: 18,
    },
    point:{
        alignItems: 'center'
    },
    subtitle:{
        color: '#FFF',
        fontSize: 16,
    },
    content:{
        flex: 1,
    },
    boxBnt:{
        flexDirection: 'row',
        //padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom:{
        backgroundColor: '#FFF',
        width: 200,
        height: 100,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    bottom2:{
        backgroundColor: '#FFF',
        width: 180,
        height: 220,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    txtBottom:{
        margin:12,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#BA68C8',
        textAlign: 'center'
    },
});