import React, { Component } from 'react';

class SignUp extends Component<{}, {}> {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	}

	handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			[target.id]: target.value
		})
	}
	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h5>Sign Up</h5>
					<div className="field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<hr/>
					<div className="field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<hr/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
}

export default SignUp;
