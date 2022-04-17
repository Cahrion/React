// rcc
import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SetProduct extends Component {
    state = { id: "", categoryId: '', productName: '', quantityPerUnit: '', unitPrice: '', unitsInStock: ''};
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        alertify.success("added to product list"); // alertify
        event.preventDefault();
        var newProductList = this.props.products;
        newProductList.push(this.state);
        this.props.setState({products:newProductList});
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
                        <Label for='categoryId'>Category Name</Label>
                        <Input type='select' name='categoryId' id='categoryId' onChange={this.handleChange} placeholder='Please select Category Name'>
                            {
                                this.props.categories.map(category=>(
                                    <option name={category.id} id={category.id} value={category.id}>{category.categoryName}</option>
                                ))
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='productName'>Product Name</Label>
                        <Input type='text' name='productName' id='productName' onChange={this.handleChange} placeholder='Please enter Product Name'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='quantityPerUnit'>Quantity Per Unit</Label>
                        <Input type='text' name='quantityPerUnit' id='quantityPerUnit' onChange={this.handleChange} placeholder='Please enter Quantity Per Unit'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='unitPrice'>Unit Price</Label>
                        <Input type='text' name='unitPrice' id='unitPrice' onChange={this.handleChange} placeholder='Please enter Unit Price'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='unitsInStock'>Units In Stock</Label>
                        <Input type='text' name='unitsInStock' id='unitsInStock' onChange={this.handleChange} placeholder='Please enter Units In Stock'></Input>
                    </FormGroup>
                    <Button type='submit' color='success'>Send</Button>
                </Form>
            </div>
        )
    }
}
