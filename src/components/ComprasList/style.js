import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        //height: 60,
        marginBottom: 10,
        paddingStart: 14,
        paddingEnd: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 14,
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',

    },
    valor:{
        fontSize: 16,
        color: '#D9D9D9',
       // marginRight: 18,
    },
    data:{
        fontSize: 16,
        color: '#D9D9D9',

    },
    type:{
        fontSize: 18,
    },
    lblCatogoria:{
        flexDirection: 'row',
    },
    texts:{
        marginTop: 10,
        marginBottom: 10,
    },
    bnts:{
        flexDirection: 'row',
    },
    bntsDelete:{
        backgroundColor: '#C62c36',
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
