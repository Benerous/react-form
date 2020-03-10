import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Your Details" />
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText= { firstName }
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText= { lastName }
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText= { email }
                        />
                        <ListItem
                        primaryText="Occupation"
                        secondaryText= { occupation }
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText= { city }
                        />
                        <ListItem
                        primaryText="Bio"
                        secondaryText= { bio }
                        />
                    </List>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />
                    <br />
                    <RaisedButton 
                        label="Change Details"
                        primary={false}
                        style={style.button}
                        onClick={this.back}
                    />
                    <br />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style = {
    button: {
        margin: 15
    }
};