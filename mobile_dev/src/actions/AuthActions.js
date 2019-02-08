import fireBase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_PIN_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    console.log('In action emailChanged');
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log('In passwordChanged'); 
    return { 
        type: PASSWORD_CHANGED, 
        payload: text
    }; 
}; 
    
export const userPinChanged = (text) => {
    console.log('In userPinChanged'); 
    return { 
        type: USER_PIN_CHANGED, 
        payload: text
    }; 
}; 

const onLoginSuccess = (dispatch, user) => {
    console.log(user);
     dispatch({
         type: LOGIN_USER_SUCCESS,
         payload: user
     });

     Actions.family();      
};


const onLoginFail = (dispatch, error) => {
    console.log('Login Failed with error Code:', error.code, ' Msg:', error.message);
     dispatch({
         type: LOGIN_USER_FAIL,
         payload: error.message
     });
};

export const loginUser = ({ email, password }) => {
    console.log('logigUser called with ', email, ' & ', password);
     return (dispatch) => {
              dispatch({ type: LOGIN_USER });

              fireBase.auth().signInWithEmailAndPassword(email, password)
              .then(user => onLoginSuccess(dispatch, user))
              .catch(error => onLoginFail(dispatch, error));
          };  
};

export const signUpUser = ({ email, password, familyName }) => {    
     return (dispatch) => {
              dispatch({ type: LOGIN_USER });

              fireBase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => onLoginSuccess(dispatch, user, 'loginAfterSignUp'))
                .catch(error => onLoginFail(dispatch, error));              
          };
};

