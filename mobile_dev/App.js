/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import fireBase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';


// import Header from './src/components/Header'
// import LoginForm from './src/components/Auth/LoginForm';
// import Button from './src/components/common/Button';
// import Spinner from './src/components/common/Spinner';
// import CardSection from './src/components/common/CardSection';
import Router from './src/router';

export default class App extends Component {
  componentWillMount() {
    fireBase.initializeApp({
       apiKey: 'AIzaSyAfzee9BFllfTUNBg8u8-A4psaAT1_7k0k',
       authDomain: 'nurture-6513f.firebaseapp.com',
       databaseURL: 'https://nurture-6513f.firebaseio.com',
       projectId: 'nurture-6513f',
       storageBucket: 'nurture-6513f.appspot.com',
       messagingSenderId: '518605657802'
     });     
   }
 
   LogOut() {
     console.log('Pressed Log Out');
   }
 
   render() { 
     const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
     //const store = createStore(reducers);
 
     return (
      <Provider store={store}>        
        <Router />          
      </Provider>                    
    );
   }
 }
 
