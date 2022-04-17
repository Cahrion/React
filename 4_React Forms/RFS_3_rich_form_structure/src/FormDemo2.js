// rcc
import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FormDemo2 extends Component {
    state = { email: "", password: '', city: '', description: '' };
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success("added to user list"); // alertify
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='email' onChange={this.handleChange} placeholder='Please enter email'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password' onChange={this.handleChange} placeholder='Please enter password'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='textarea' name='description' id='description' onChange={this.handleChange} placeholder='Please enter description'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='select' name='city' id='city' onChange={this.handleChange} placeholder='Please select city'>
                            <option>Istanbul</option>
                            <option>Ankara</option>
                            <option>Izmir</option>
                            <option>Adana</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit' color='success'>Send</Button>
                </Form>
            </div>
        )
    }
}
