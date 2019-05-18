import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSnippet, deleteSnippet } from '../actions/snippetsActions';

interface IProps {
}

class CreateSnippet extends Component<IProps> {
	state = {
		title: '',
		content: '',
		id: '',
	}

	handleTitleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
		const random = Math.floor((Math.random() * 1) * 8000);
		addSnippet.dispatch({ id: random, title: this.state.title })
	}

	handleDeleteChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			[target.id]: target.value
		})
	}

	handleDelete = () => {
		console.log(this.state)
		deleteSnippet.dispatch({ id: parseInt(this.state.id, 10) });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h5>Sign Up</h5>
					<div className="field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleTitleChange} />
					</div>
					<hr/>
					<div className="field">
						<label htmlFor="content">Content</label>
						<textarea id="content" onChange={this.handleContentChange} />
					</div>
					<hr/>
					<div className="field">
						<label htmlFor="delete">ID To Delete</label>
						<input type="id" id="id" onChange={this.handleDeleteChange} />
						<button onClick={this.handleDelete}>Delete</button>
					</div>
					<button type='submit' onClick={this.handleCreate}>Create</button>
				</form>
			</div>
		);
	}
}

// const mapDispatchToProps = (dispatch: ThunkDispatchAlias)

export default connect()(CreateSnippet);


/**
import { push } from 'connected-react-router'

// in component render:
onClick={() => {
  props.push('/home');
}}

// connect the action:
export default connect(null, { push })(Component);
 */
