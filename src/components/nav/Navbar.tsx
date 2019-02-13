import React from 'react';
import styled from '@emotion/styled';
import SignedInLinks from 'src/pages/SignedInLinks';
import SignedOutLinks from 'src/pages/SignedOutLinks';

const Navbar = () => (
	<Header>
		<h3>App</h3>
		<Nav>
			<SignedInLinks />
		</Nav>
	</Header>
);

const Header = styled('header')({
	padding: '12px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	background: '#333',
	color: 'white',

	'h3': {
		flexGrow: 1,
		margin: 0
	}
})

const Nav = styled.nav({
	display: 'flex',
	justifyContent: 'space-between',
	flexGrow: 1,

	'a': {
		color: 'white',
		textTransform: 'uppercase',
		textDecoration: 'none',

		'&:hover': {
			textDecoration: 'underline'
		}
	}
})

export default Navbar;
