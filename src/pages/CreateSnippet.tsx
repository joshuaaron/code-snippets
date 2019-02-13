import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSnippet } from 'src/actions/snippetsActions';
import { ThunkDispatchAlias } from 'src/actions/createAction';
import { ISnippet } from 'src/interfaces';

interface IProps {
}

class CreateSnippet extends Component<IProps, {}> {
	state = {
		title: '',
		content: '',
	}

	handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			[target.id]: target.value
		})
	}

	handleContentChange = ({ target}: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({
			[target.id]: target.value
		})
	}

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	}

	handleCreate = () => {
		this.props.createSnippet({ id: 2, title: this.state.content })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h5>Sign Up</h5>
					<div className="field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<hr/>
					<div className="field">
						<label htmlFor="content">Content</label>
						<textarea id="content" onChange={this.handleContentChange} />
					</div>
					<hr/>
					<button type='submit' onClick={this.handleCreate}>Create</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatchAlias)

export default connect(null, mapDispatchToProps)(CreateSnippet);


/**
import { push } from 'connected-react-router'

// in component render:
onClick={() => {
  props.push('/home');
}}

// connect the action:
export default connect(null, { push })(Component);
 */
