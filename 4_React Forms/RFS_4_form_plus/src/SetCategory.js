// rcc
import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SetCategory extends Component {
    state = { id: "", categoryName: '', seoUrl: ''};
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        var newCategoryList = this.props.categories;
        newCategoryList.push(this.state);
        this.props.setState({categories:newCategoryList});
        alertify.success("added to category list"); // alertify
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='id'>Id</Label>
                        <Input type='text' name='id' id='id' onChange={this.handleChange} placeholder='Please enter id'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='categoryName'>Category Name</Label>
                        <Input type='text' name='categoryName' id='categoryName' onChange={this.handleChange} placeholder='Please enter Category Name'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='seoUrl'>SEO url</Label>
                        <Input type='text' name='seoUrl' id='seoUrl' onChange={this.handleChange} placeholder='Please enter SEO url'></Input>
                    </FormGroup>
                    <Button type='submit' color='success'>Send</Button>
                </Form>
            </div>
        )
    }
}
