import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    userPinChanged,
    signUpUser,
    loginUser
    
} from '../../actions/AuthActions';

import Button from '../common/Button';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';
import Spinner from '../common/Spinner';


class LoginForm extends Component {
    // state = { email:'', password:'', error:'', loading: false };
    //  state = { error:'', loading: false };

    onButtonPress() {        
        const { email, password, familyName } = this.props;
        
        if (this.props.action) {
            this.props.signUpUser({ email, password, familyName });
        } else {
            this.props.loginUser({ email, password });
        }        
    }

    onEmailChange(text) {
        console.log('onEmailChange called');
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onUserPinChange(text) {
        this.props.userPinChanged(text);
    }
    
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        if (this.props.action) {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>Sign Up</Button>     
            );    
        }     

        return (
            <Button onPress={this.onButtonPress.bind(this)}>Sign In</Button>     
        );
    }
    renderError() {
        if (this.props.error) {
            return (
                <View>
                   <Text style={styles.errorTextStyle}>{this.props.error}</Text>     
                </View>
            );
        }
    }
    renderUserPin() {
        if (this.props.action) {
            return (
                <CardSection>
                    <Input
                         label="PIN"
                         placeholder="enter pin"
                         value={this.props.userPin}
                         onChangeText={this.onUserPinChange.bind(this)}                    
                    />               
                </CardSection>
            );
        }
    }
    render() {        
        return (
        <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="user@gmail.com"
                    // value={ this.state.email}
                    // onChangeText={email => this.setState({email})}
                    value={this.props.email}
                    onChangeText={this.onEmailChange.bind(this)}                    
                />               
            </CardSection>
            <CardSection>
                <Input
                    label="Password"
                    placeholder="password"
                    secureTextEntry
                    // value={ this.state.password}
                    // onChangeText={password => this.setState({password})}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
            </CardSection>
            {this.renderUserPin()}
            {this.renderError()}    

             {/* TODO: Some how the style for card section is not getting overridden.. 
            Need to fix it */}
             <CardSection>
                {this.renderButton()}               
            </CardSection>                 
        </Card>
        );
    }           
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const { email, password, error, loading, userPin } = state.auth;
   
    return {
        email,
        password,
        userPin,
        error,
        loading 
    };
};
export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    userPinChanged,
    signUpUser,
    loginUser
     })(LoginForm); 
