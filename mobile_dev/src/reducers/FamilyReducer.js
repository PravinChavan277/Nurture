import {
    FAMILY_UPDATE,
    FAMILY_MEMBER_CREATE,
} from '../actions/types';


const INITIAL_STATE = {
    Name: '',
    userPin: '',
    PetName: '',
    role: '',
    totalPoints: 0
};

export default (state = INITIAL_STATE, action) => {
    console.log('In FamilyReducer: ', action.type);

    switch (action.type) {
        case FAMILY_UPDATE:
          return { ...state, [action.payload.prop]: action.payload.value };
        
        case FAMILY_MEMBER_CREATE:
            return INITIAL_STATE;

        default:
            return state;
    }
};
