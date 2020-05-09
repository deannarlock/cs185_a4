import React, { Component } from 'react';
import './InputBox.css'

export class InputBox extends Component {
	constructor() {
		super()
		this.state = {
			inputName: "",
			inputDesc: "",
			inputMessage: "",
			inputAllow: "",
			inputEmail: ""
		}
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeDesc = this.handleChangeDesc.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeAllow = this.handleChangeAllow.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChangeName(event) {
    	this.setState({inputName: event.target.value});
	}
	handleChangeDesc(event) {
    	this.setState({inputDesc: event.target.value});
	}
	handleChangeMessage(event) {
    	this.setState({inputMessage: event.target.value});
	}
	handleChangeAllow(event) {
    	this.setState({inputAllow: event.target.value});
	}
	handleChangeEmail(event) {
    	this.setState({inputEmail: event.target.value});
	}
	handleSubmit(event) {
		var name = this.state.inputName
		console.log(name)
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit}>
				 	<label>
						Name:
						<input type="text" value={this.state.inputName} onChange={this.handleChangeName}/>
					</label>
					<label>
						Description:
						<input type="text" value={this.state.inputDesc} onChange={this.handleChangeDesc}/>
					</label>
					<label>
						Message:
						<input type="text" value={this.state.inputMessage} onChange={this.handleChangeMessage}/>
					</label>
					<label>
						View Public:
						<input type="text" value={this.state.inputAllow} onChange={this.handleChangeAllow}/>
					</label>
					<label>
						Email:
						<input type="text" value={this.state.inputEmail} onChange={this.handleChangeEmail}/>
					</label>
					 <input type="submit" value="Submit" />
				</form>
				<h1>{this.state.value}</h1>
			</div>
		);
	}
}
export default InputBox
