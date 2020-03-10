import React, { Component } from 'react'
import FormUserDetailes from './FormUserDetailes';
import FormPersonalDetailes from './FormPersonalDetailes';
import Confirm from './Confirm';
import Success from './Success';

export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };


    // Next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    };

    // Starting a new form
    newStart = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        });
    };

    render() {
        const { 
            step,
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetailes
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetailes
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success 
                        newStart={this.newStart}
                    />
                )
            default:
                return <h1>Success</h1>;
        };
    };
};