import React, { useState } from 'react';

// importing components

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const login = async (email, password) => {
		try {
			const response = await fetch('http://127.0.0.1:8000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				console.log(data);

				localStorage.setItem('apiKey', data.api_key.api_key);
				localStorage.setItem('user_id', data.user.id);
				localStorage.setItem('username', data.user.name);
				alert('Login successful!');
			} else {
				setError(data.message || 'Failed to login. Please try again.');
			}
		} catch (err) {
			setError('Something went wrong. Please try again later.');
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!email || !password) {
			setError('Please fill in all fields.');
			return;
		}

		setError('');
		login(email, password);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<input
					type='email'
					className='form-input'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					className='form-input'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<input type='submit' value='Login' className='sbmt-btn' />
			</form>
		</>
	);
};

export default LoginForm;
