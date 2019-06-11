import React, { useState, useCallback } from 'react';
//@ts-ignore
import { useSelector, useDispatch } from "react-redux";
import { createSnippet } from '../actions/snippetsActions';
//@ts-ignore
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { IStore } from 'src/interfaces';

const CreateNew = (props: any) => {
	const firestore = useFirestore(); // gets the firestore instance to pass to actions
	const dispatch = useDispatch(); // 

	// connect and get state from redux store:
	useFirestoreConnect('snippets');
	const snips = useSelector((state: IStore) => state.firestore.ordered.snippets);
	
	console.log({ snips });

	const [snippet, setSnippet] = useState({ title: '', content: '' });

	const addSnippet = useCallback(
		snippet => dispatch(createSnippet(snippet, firestore)),
		[firestore]
	);

	const handleChange = (e: any) => {
		setSnippet({ ...snippet, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (snippet.title.trim() === "" || snippet.content.trim() === "") return;
		addSnippet(snippet);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Sign Up</h5>
				<div className="field">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" onChange={handleChange} />
				</div>
				<hr/>
				<div className="field">
					<label htmlFor="content">Content</label>
					<textarea id="content" onChange={handleChange} />
				</div>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
}

export default CreateNew;
