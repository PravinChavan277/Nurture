import fireBase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    FAMILY_UPDATE,
    FAMILY_MEMBER_CREATE,
    FAMILY_MEMBER_FETCH_SUCCESS
} from './types';


export const FamilyUpdate = ({ prop, value }) => {
     return {
         type: FAMILY_UPDATE,
         payload: { prop, value }
     };
};

export const familyMemberCreate = ({ Name, PetName, role, userPin, totalPoints }) => {
    console.log(Name, PetName, role, userPin);
    const { currentUser } = fireBase.auth(); 

    return (dispatch) => {
        fireBase.database().ref(`users/${currentUser.uid}/familyMembers`)
        .push({ Name, PetName, role, userPin, totalPoints })
        .then(() => {
            dispatch({ type: FAMILY_MEMBER_CREATE });
            Actions.pop(); 
        });
    };
};

export const familyMembersFetch = () => {
    const { currentUser } = fireBase.auth(); 

    return (dispatch) => {
        fireBase.database().ref(`users/${currentUser.uid}/familyMembers`)
        .on('value', snapshot => {
            dispatch({ type: FAMILY_MEMBER_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
