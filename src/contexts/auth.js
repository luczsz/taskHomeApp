import React, { useEffect, useState, createContext } from 'react';
import firebase from '../services/firebaseConnetion';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider( {children} ){


    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ loadingAuth, setLoadingAuth ] = useState(false);


    useEffect( ()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
             
            }
            setLoading(false);
        }
        loadStorage();

    },[])

    // Logando o user
    async function singIn( email, senha ){
        setLoadingAuth(true);

        await firebase.auth().
        signInWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid;
            
            await firebase.database().ref('usuarios').child(uid).once('value')
            .then( (snap) => {
                let data = {
                    uid: uid,
                    nome: snap.val().nome,
                    email: value.user.email,
                    casa: snap.val().casa
                };

                setUser(data);
                storageUser(data);
                
                setLoadingAuth(false);
                
            } )
        })
        .catch( (error) =>{
            alert(error.code);
            setLoadingAuth(false);
        } );
    };

    // Cadastrando um usuario
    async function singUp(email, senha, nome, casa){
        setLoadingAuth(true);

        await firebase.auth().
        createUserWithEmailAndPassword(email,senha)
        .then( async (value) => {
            let uid = value.user.uid;

            await firebase.database().ref('usuarios').child(uid).set({
                pontos: 0,
                nome: nome,
                casa: casa
          })
            .then( () => {
                let data ={
                    uid: uid,
                    nome: nome,
                    casa: casa,
                    email: value.user.email
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            } )
            .catch( (error) => {
                alert(error.code);
                setLoadingAuth(false);
            } );
        } )
        .catch( (error) => {
            alert(error.code);
        } )
    }

    //Salvando dados offiline 
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    // deslogando um usuarios
    async function singOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        } )
    }

    return(

        <AuthContext.Provider value={{ signed:  !!user, user, loading, loadingAuth, singIn, singUp, singOut }} >
            {children}
        </AuthContext.Provider>

    );
}