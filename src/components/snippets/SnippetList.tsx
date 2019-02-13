import React from 'react';
import { ISnippet } from 'src/interfaces';
import SnippetSummary from './SnippetSummary';

interface IProps {
	snippets: ISnippet[];
}

const SnippetList = ({ snippets }: IProps) => {
	return (
		<div>
			{snippets && snippets.map(snippet => (
				<SnippetSummary
					key={snippet.id}
					title={snippet.title}
					id={snippet.id}
				/>
			))}
		</div>
	);
}

export default SnippetList;
