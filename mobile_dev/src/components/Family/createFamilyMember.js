import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { FamilyUpdate, familyMemberCreate } from '../../actions';

import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';
import Button from '../common/Button';

class CreateFamilyMember extends Component {
    onButtonPress() {
        const { Name, PetName, role, userPin } = this.props;

        this.props.familyMemberCreate({ 
            Name, PetName, userPin, role: role || 'Daughter', totalPoints: 0 });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Name'
                        placeholder='Name'
                        value={this.props.Name}
                        onChangeText={
                            text => this.props.FamilyUpdate({ prop: 'Name', value: text })
                        }
                    / >
                </CardSection>
                <CardSection>
                    <Input 
                        label='Pet Name'
                        placeholder='Pet Name'
                        value={this.props.PetName}
                        onChangeText={
                            text => this.props.FamilyUpdate({ prop: 'PetName', value: text })
                        }
                    / >
                </CardSection>
                <CardSection>
                    <Input 
                        label='User Pin'
                        placeholder='enter user pin'
                        value={this.props.userPin}
                        onChangeText={
                            text => this.props.FamilyUpdate({ prop: 'userPin', value: text })
                        }
                    / >
                </CardSection>
                <CardSection>
                    <Text style={styles.pickerLabelStyle}>Select Role:</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.role}
                        onValueChange={
                            role => this.props.FamilyUpdate({ prop: 'role', value: role })
                        }
                    >
                        <Picker.Item label='Parent' value='Parent' />
                        <Picker.Item label='Son' value='Son' />
                        <Picker.Item label='Daughter' value='Daughter' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { Name, PetName, role, userPin, totalPoints } = state.family;
    console.log('mapStateToProps Name:', Name, 'PetName: ', PetName);
    return { Name, PetName, role, userPin, totalPoints };
};

export default connect(mapStateToProps, { FamilyUpdate, familyMemberCreate })(CreateFamilyMember);
