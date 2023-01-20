import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        margin: 10,
        backgroundColor: '#FFF',
        
        borderRadius: 12,
        flexDirection: 'row',
    },
    ContainerText:{
        flex: 1,
        padding: 8,
        //backgroundColor: 'grey',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    titleView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    description:{},
    descriptionTitle:{
        fontSize: 14,
        color: 'grey',
        margin: 5,

    },
    dateView:{},
    bottomView:{
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'green',
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
    },
    bottomCancel:{
        backgroundColor:'#C62c36',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
    },
    bottomText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        textTransform: 'uppercase'
    },

})