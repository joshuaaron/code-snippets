import React from 'react';
import { IRouteProps } from '../../routes';

interface IProps {}

const SnippetDetails = (props: IProps & IRouteProps) => {
	const { id } = props.match.params;
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

export default SnippetDetails;
