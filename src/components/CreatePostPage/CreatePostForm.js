import React, { useEffect, useState } from 'react';
import axios from 'axios';

// importing styles
import '../../assets/styles/CreatePost/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';

const CreatePostForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);

	const [communities, setCommunities] = useState([]);
	const [selectedCommunity, setSelectedCommunity] = useState('');

	useEffect(() => {
		const fetchCommunities = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:8000/api/subreddit');
				setCommunities(response.data);
			} catch (error) {
				console.error('Error fetching communities:', error);
			}
		};

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

			const response = await axios.post('http://127.0.0.1:8000/api/post', {
				title: title,
				content: content,
				user_id: 1,
				subreddit_id: selectedCommunity,
				created_at: null,
				updated_at: null,
				upvotes: 0,
				downvotes: 0,
				comment_count: 0,
			});

			console.log('Post created:', response.data);
			alert('Post created successfully!');

			setTitle('');
			setContent('');
		} catch (error) {
			console.error('Error creating post:', error);
			alert('Failed to create the post. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div>
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

			<div className='options'>
				<Button
					text='Text'
					backgroundColor='transparent'
					hoverBackgroundColor='#333d42'
					borderRadius='none'
					padding='1rem 1rem'
					fontSize='0.9rem'
					activeBorderBottom='3px solid #648efc'
					activeBackgroundColor='transparent'
					active
				/>

				<Button
					text='Images & Video'
					backgroundColor='transparent'
					hoverBackgroundColor='#333d42'
					borderRadius='none'
					padding='1rem 1rem'
					fontSize='0.9rem'
					activeBorderBottom='3px solid #648efc'
					activeBackgroundColor='transparent'
				/>

				<Button
					text='Link'
					backgroundColor='transparent'
					hoverBackgroundColor='#333d42'
					borderRadius='none'
					padding='1rem 1rem'
					fontSize='0.9rem'
					activeBorderBottom='3px solid #648efc'
					activeBackgroundColor='transparent'
				/>

				<Button
					text='Poll'
					backgroundColor='transparent'
					hoverBackgroundColor='#333d42'
					borderRadius='none'
					padding='1rem 1rem'
					fontSize='0.9rem'
					activeBorderBottom='3px solid #648efc'
					activeBackgroundColor='transparent'
					disabled
				/>
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

export default CreatePostForm;
