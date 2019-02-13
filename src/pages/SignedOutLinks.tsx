import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks: React.FC = () => (
	<>
		<Link to='/'>Sign Up</Link>
		<Link to='/login'>Log in</Link>
	</>
);

export default SignedOutLinks;
