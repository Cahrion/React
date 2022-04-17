// rcc
import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName: '',city: ""}
    onChangeHandler = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    };
    onSubmitHandler = (event)=>{
        event.preventDefault(); // We blocked it from refreshing the page
        alert(this.state.userName + " " + this.state.city)
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}> {/* Form Submit */}
                    <h3>User Name</h3>
                    <input onChange={this.onChangeHandler} type='text' name='userName'></input>
                    <h6>Your name will look like this: {this.state.userName}</h6>

                    <h3>City</h3>
                    <input onChange={this.onChangeHandler} type='text' name='city'></input>
                    <h6>Your city will look like this: {this.state.city}</h6>

                    <input type='submit' value='Save'></input>
                </form>
            </div>
        )
    }
}
