import React from 'react';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import './Login.css';


class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			passwors:""
		};
	}

	
	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleEmailChange = event => {
		this.setState({
		  email : event.target.value
		});
	}

	handlePassChange = event =>{
		this.setState({
		  pass : event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.handleEmailChange(event);
		this.handlePassChange(event);
	}

	render() {
		return (
		  <div className="Login">
			<Form horizontal onSubmit={this.handleSubmit}>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email" 
													value={this.state.email} onChange={this.handleEmailChange} />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password" 
													value={this.state.password} onChange={this.handlePassChange}/>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit">Sign in</Button>
					</Col>
				</FormGroup>
			</Form>
		  </div>
		);
  	}
}


export default Login; 

