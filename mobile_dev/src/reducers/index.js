import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FamilyReducer from './FamilyReducer';
import FamilyMemberReducer from './FamilyMemberReducer';

export default combineReducers({
    auth: AuthReducer,
    family: FamilyReducer,
    familyMembers: FamilyMemberReducer
});
