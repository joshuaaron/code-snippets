import React from 'react';
import { IRouteProps } from '../../routes';
import { IStore, ISnippet } from '../../interfaces';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

interface IProps {}
interface IStateProps {
	snippet?: ISnippet;
}

const mapStateToProps = (state: IStore, ownProps: IProps & IRouteProps): IStateProps => {
	const { id } = ownProps.match.params
	const snippet: ISnippet[] = state.firestore.ordered.snippets;
	return {
		snippet: snippet ? snippet[id as any] : undefined
	}
}

const SnippetDetails = (props: IProps & IRouteProps) => {
	const { id } = props.match.params;
	console.log({ props });
	return (
		<div className="container">
			<div className="card">
				<h4>Snippet {id}</h4>
				<p>Snippet content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo beatae commodi maiores possimus deserunt fuga est iusto dolor porro.</p>
				<hr/>
				<div className="date">Date and author</div>
			</div>
		</div>
	)
}

export default compose<any>(
	firestoreConnect(['snippets']),
	connect(mapStateToProps),
)(SnippetDetails);
