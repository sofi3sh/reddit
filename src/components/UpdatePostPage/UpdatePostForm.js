import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// importing styles
import '../../assets/styles/UpdatePost/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';

const UpdatePostForm = () => {
	const location = useLocation();
	const post_id = new URLSearchParams(location.search).get('id');

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);

	const [communities, setCommunities] = useState([]);
	const [selectedCommunity, setSelectedCommunity] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		const fetchCommunities = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:8000/api/subreddit',
					{
						headers: {
							Authorization: localStorage.getItem('apiKey'),
						},
					}
				);
				setCommunities(response.data);
			} catch (error) {
				console.error('Error fetching communities:', error);
			}
		};

		const fetchPost = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:8000/api/post/' + post_id,
					{
						headers: {
							Authorization: localStorage.getItem('apiKey'),
						},
					}
				);
				setTitle(response.data.title);
				setContent(response.data.content);
				setSelectedCommunity(response.data.subreddit_id);
			} catch (error) {
				console.error('Error fetching communities:', error);
			}
		};

		fetchPost();
		fetchCommunities();
	}, []);

	const handleChange = event => {
		setSelectedCommunity(event.target.value);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (!title || !content) {
			alert('Please fill in all fields.');
			return;
		}

		try {
			setLoading(true);

			const response = await axios.patch(
				'http://127.0.0.1:8000/api/post/' + post_id,
				{
					title: title,
					content: content,
					user_id: 1,
					subreddit_id: selectedCommunity,
				},
				{
					headers: {
						Authorization: localStorage.getItem('apiKey'),
					},
				}
			);

			console.log('Post updated!:', response.data);
			navigate('/');
			alert('Post updated successfully!');

			setTitle('');
			setContent('');
		} catch (error) {
			console.error('Error updating post:', error);
			alert('Failed to update the post. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className='select-wrapper'>
				<select
					name='subreddit_id'
					id=''
					className='community-drop-menu'
					value={selectedCommunity}
					onChange={handleChange}
				>
					<option value=''>Select Community</option>
					{communities.map(community => (
						<option key={community.id} value={community.id}>
							r/{community.name}
						</option>
					))}
				</select>
			</div>

			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						type='text'
						className='form-input'
						placeholder=' '
						id='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<label htmlFor='title' className='form-label'>
						Title
					</label>
				</div>
				<div className='form-group'>
					<textarea
						className='form-input'
						placeholder='Body'
						id='body'
						value={content}
						onChange={e => setContent(e.target.value)}
						style={{ resize: 'none' }}
					></textarea>
				</div>

				<div className='form-group flex-end'>
					<Button
						text={loading ? 'Posting...' : 'Post'}
						backgroundColor='#115bca'
						hoverBackgroundColor='#1870f4'
						borderRadius='32px'
						padding='0.8rem 1rem'
						fontSize='0.9rem'
						color='#fff'
						width='fit-content'
						type='submit'
						disabled={loading}
					/>
				</div>
			</form>
		</>
	);
};

export default UpdatePostForm;
