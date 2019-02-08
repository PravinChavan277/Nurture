import React, { Component } from 'react';
import { Text } from 'react-native';
import CardSection from '../common/CardSection';

class FamilyMemberListItem extends Component {
    render() {
        const { Name, totalPoints } = this.props.familyMember;

        console.log(Name);

        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    { Name }
                </Text>
                <Text style={styles.titleStyle}>{ totalPoints }</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default FamilyMemberListItem;
