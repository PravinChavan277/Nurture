import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_PIN_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';


const INITIAL_STATE = { 
    email: '',
    password: '',
    userPin: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log('In AuthReducer', action.payload);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case USER_PIN_CHANGED:
            return { ...state, userPin: action.payload };

        case LOGIN_USER:
            console.log('LogIn User started in Authreducer ...');
            return { ...state, loading: true, error: '' };
        
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case LOGIN_USER_FAIL:
           
            return { ...state, error: action.payload, password: '', loading: false };

        default:
            return state;
    }
};
