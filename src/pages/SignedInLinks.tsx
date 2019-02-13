import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks: React.FC = () => (
	<>
		<Link to='/'>Home</Link>
		<Link to='/create'>Create Snippet</Link>
		<Link to='/logout'>Log out</Link>
		<Link to="/posts">Posts</Link>
	</>
);

export default SignedInLinks;
