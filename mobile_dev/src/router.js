import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/Auth/LoginForm';
import FamilyMembersList from './components/Family/FamilyMembers';
import CreateFamilyMember from './components/Family/createFamilyMember';

const RouterComponent = () => {    
        return (        
            <Router>
                <Scene key='root' hideNavBar>
                    <Scene key='auth'>
                        <Scene
                            rightTitle='Sign Up'
                            onRight={() => Actions.signup({ action: 'SignUp' })}  
                            key='login' 
                            component={LoginForm} 
                            title='Please login' 
                            initial 
                        />   
                        <Scene                           
                            key='signup' 
                            component={LoginForm} 
                            title='SignUp' 
                        />                       
                    </Scene>
                    <Scene key='family'>
                        <Scene
                        rightTitle='Add'
                        onRight={() => Actions.createFamilyMember()} 
                        key='familyMembers' 
                        component={FamilyMembersList} 
                        title='My Family' 
                        initial
                        />
                        <Scene 
                            key='createFamilyMember'
                            component={CreateFamilyMember}
                            title='Add Family Member'
                        />
                    </Scene>
                    
                </Scene>
            </Router>
        );      
};

export default RouterComponent;
