import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import FamilyMemberListItem from './FamilyMemberListItem';
import { familyMembersFetch } from '../../actions';


class FamilyMembersList extends Component {
    componentWillMount() {
        this.props.familyMembersFetch();

        // When user comes back from adding a new family member, 
        // component is unmounted, at that time WillReceiveProps will not be called.
        // Hence we want to update the data store with the props as the 
        // component is being mounted again. During the first mounting there 
        // may not be values yet in 
        // this.props
        this.createDataStore(this.props);
    }

         
    componentWillReceiveProps(nextProps) {
        // nextProps is the next set of props that this component
        // will be rendered with and 
        // this.props is still the old set of props

        // Data store also needs to be handled while receiving props since during WillMount
        // familyMembers are being fetched however the properties are not set yet.
        this.createDataStore(nextProps);
    }

    createDataStore({ familyMembers }) {        
        // TODO: I have not understood this piece of code really .. keeping it for later
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(familyMembers);
    }

    renderRow(familyMember) {
        return <FamilyMemberListItem familyMember={familyMember} />;
    }

    render() {
        console.log(this.props);

        return (
            <ListView
                enableEmptySections
                dataSource={this.DataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const familyMembers = _.map(state.familyMembers, (val, uid) => { return { ...val, uid }; });  

    console.log('family Members are : ');
    console.log(familyMembers);
    return { familyMembers };
};

export default connect(mapStateToProps, { familyMembersFetch })(FamilyMembersList);
