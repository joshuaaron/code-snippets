import React from 'react';
import { ISnippet } from 'src/interfaces';
import SnippetSummary from './SnippetSummary';
import { Link } from 'react-router-dom';
interface IProps {
	snippets: ISnippet[];
}

const SnippetList = ({ snippets }: IProps) => {
	return (
		<div>
			{snippets && snippets.map(snippet => (
				<Link to={`posts/${snippet.id}`} key={snippet.id}>
					<SnippetSummary
						title={snippet.title}
						id={snippet.id}
					/>
				</Link>
			))}
		</div>
	);
}

export default SnippetList;
