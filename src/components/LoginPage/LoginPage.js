import React from 'react';

// importing components
import LoginForm from './LoginForm';

//importing styles

const LoginPage = () => {
	return (
		<div className='login-container'>
			<span className='title'>Login</span>

			<div className='login-form-wrapper'>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
