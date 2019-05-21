import React from 'react';
import styled from '@emotion/styled';
import { IStore, ISnippet } from '../interfaces';
import Notifications from '../components/Notifications/Notifications';
import SnippetList from '../components/Snippets/SnippetList';
import { connect } from 'react-redux';

interface IStateProps {
	snippets: ISnippet[];
}

const mapStateToProps = (state: IStore): IStateProps => {
	return {
		snippets: state.snippets
	}
}

const Dashboard = (props: IStateProps) => {
	const { snippets } = props;
	return (
		<Container>
			<SnippetList snippets={snippets} />
			<Notifications />
		</Container>
	)
};

const Container = styled('div')({
	display: 'flex',

	'div': {
		flex: 1,
	}
})

export default connect(mapStateToProps)(Dashboard);
