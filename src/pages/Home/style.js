import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313', 
    },
    header:{
        height: 130,
        marginTop: 40,
        padding: 14,
        borderWidth: 1,
        borderBottomColor: '#BA68C8',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleView:{
        flex: 1,
        //height: 140,
        //backgroundColor: '#DDD',
    },
    contentTitle:{
        //marginTop: 2,
        marginBottom: 2,
        marginStart: 5,
        //height: 40,
        //padding: 5,
        //backgroundColor: 'green',
        flexDirection: 'row',
    },
    title:{
        color: '#FFF',
        fontSize: 20,
    },
    points:{
        color: '#FFF',
        fontSize: 15,
    },
    username:{
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    userBottom:{
        marginLeft: 8,
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44,
    },
    bntView:{
        height: 200,
        //backgroundColor: '#DDD',
        marginTop: 20,
        marginStart: 14,
        marginEnd: 14,

    },
    listView:{
        height: 388,
        //backgroundColor: 'red',
        marginTop: 10,
        marginStart: 14,
        marginEnd: 14,
        paddingStart: 5,
        paddingEnd: 5,

    },  
    bottom:{
        backgroundColor: '#FFF',
        width: 180,
        height: 180,
        margin: 10,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BA68C8',
        textAlign: 'center'
    },
});