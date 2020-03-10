import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


export default class Success extends Component {

    newForm = e => {
        e.preventDefault();
        this.props.newStart();
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank You For Your Submission</h1>
                    <p>You will get an email with further instructions</p>
                    <br />
                    <RaisedButton 
                        label="New Form"
                        primary={true}
                        style={style.button}
                        onClick={this.newForm}
                    />
                    <br />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
};

const style = {
    button: {
        margin: 15
    }
};