import React from 'react';

interface IProps {
	id: number;
	title: string;
}

const SnippetSummaryCard = ({ title, id}: IProps) => {
	return (
		<div style={{ padding: '10px', margin: '10px', border: '1px solid #555', borderRadius: '5px'}}>
			<div className="test">{title} - {id}</div>
			<p>The summary will go here</p>
			<p>Date here</p>
		</div>
	)
};

export default SnippetSummaryCard;
