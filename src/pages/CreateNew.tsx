import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSnippet } from '../actions/snippetsActions';
interface IProps {
}

interface IStateProps {
  createSnippet: (project: any) => void;
}

class CreateSnippet extends Component<IProps & IStateProps> {
	state = {
		title: '',
		content: '',
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
		this.props.createSnippet(this.state)
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
					<button type='submit'>Create</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => ({ createSnippet: (project: any) => dispatch(createSnippet(project))})

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
