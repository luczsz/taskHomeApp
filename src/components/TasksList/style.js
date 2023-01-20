import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(40,40,40,0.50)',
        //backgroundColor: 'white',
        marginTop: 4,
        marginBottom: 8,
        height: 100,
        padding: 10,
        borderRadius: 12,
        flexDirection: 'row'
        
    },  
    type:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 8,
        marginStart: 8,
        marginBottom: 5,
    },
    content:{
        flex: 1,
       // backgroundColor: '#FFF',
        marginStart: 8,
        justifyContent: 'center'
    },
    footer:{
       //backgroundColor: '#DDD',
       alignItems: 'center',
       justifyContent: 'center'
    }, 
    typeTxt:{
        fontSize: 44,
        //textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFF',
        //padding: 5
    },
    title:{
        fontSize: 22,
        color: '#DDD',
        fontWeight: 'bold',
        //paddingLeft: 15,
    },
    subtitle:{
        fontSize: 16,
        color: '#DDD',
        fontWeight: 'bold',
        //paddingLeft: 15,
    },
    viewPnts:{
        
        //backgroundColor: '#DDD',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingLeft: 10,
        width: 80,
    }
});