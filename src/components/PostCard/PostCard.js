import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../assets/styles/PostCard/style.css';

function PostCard({ post }) {
	const [subredditName, setSubredditName] = useState('');
	const [liked, setLiked] = useState(() => {
		const savedVote = localStorage.getItem(`vote_status_${post.id}`);
		return savedVote ? JSON.parse(savedVote) : null;
	});

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const fetchSubreddit = async () => {
			try {
				const response = await axios.get(
					`http://127.0.0.1:8000/api/subreddit/show/${post.subreddit_id}`
				);
				setSubredditName(response.data.name);
			} catch (error) {
				console.error('Error fetching subreddit:', error);
			}
		};

		fetchSubreddit();
	}, [post.subreddit_id]);

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev);
	};

	const handleOptionClick = async option => {
		console.log(option);
		if (option === 'Delete') {
			try {
				await axios.delete('http://127.0.0.1:8000/api/post/' + post.id);
				alert('Post deleted successfully!');
			} catch (error) {
				console.error('Error deleting post:', error);
				alert('Failed to delete post.');
			}
		}

		if (option === 'Edit') {
		}
		setIsMenuOpen(false);
	};

	const handleUpvote = async () => {
		const voteData = {
			user_id: 1,
			post_id: post.id,
			vote_type: liked ? 'downvote' : 'upvote',
		};

		try {
			await axios.post('http://127.0.0.1:8000/api/vote', voteData);
			const newLikedStatus = !liked;
			setLiked(newLikedStatus);
			localStorage.setItem(
				`vote_status_${post.id}`,
				JSON.stringify(newLikedStatus)
			);
		} catch (error) {
			console.error('Error voting:', error);
		}
	};

	return (
		<div className='post-card'>
			<div className='post-divider'></div>
			<div className='post-card-header'>
				<div>
					<span className='subreddit-name'>r/{subredditName}</span> •{' '}
					<span className='post-time'>2 days ago</span>
				</div>

				<div className='post-menu-wrapper'>
					<button className='post-menu-button' onClick={toggleMenu}>
						<i className='fa-solid fa-ellipsis fa-2xs'></i>
					</button>

					{isMenuOpen && (
						<ul className='post-menu'>
							<li
								className='post-menu-option'
								onClick={() => handleOptionClick('Edit')}
							>
								<a href={`/post/edit?id=${post.id}`} className='edit-link'>
									<div className='items-flex-start'>
										<i className='fa-regular fa-pen-to-square'></i>
										<span>Edit</span>
									</div>
								</a>
							</li>
							<li
								className='post-menu-option'
								onClick={() => handleOptionClick('Delete')}
							>
								<div className='items-flex-start'>
									<i className='fa-regular fa-trash-can'></i>
									<span>Delete</span>
								</div>
							</li>
							<li
								className='post-menu-option'
								onClick={() => handleOptionClick('Save')}
							>
								<div className='items-flex-start'>
									<i className='fa-regular fa-bookmark'></i>
									<span>Save</span>
								</div>
							</li>
							<li
								className='post-menu-option'
								onClick={() => handleOptionClick('Hide')}
							>
								<div className='items-flex-start'>
									<i className='fa-regular fa-eye-slash'></i>
									<span>Hide</span>
								</div>
							</li>
							<li
								className='post-menu-option'
								onClick={() => handleOptionClick('Report')}
							>
								<div className='items-flex-start'>
									<i className='fa-regular fa-flag'></i>
									<span>Report</span>
								</div>
							</li>
						</ul>
					)}
				</div>
			</div>
			<h3 className='post-title'>{post.title}</h3>
			<div className='post-content'>
				<p>{post.content}</p>
			</div>
			<div className='post-footer'>
				<button
					className={`btn ${liked === true ? 'liked' : ''}`}
					onClick={handleUpvote}
				>
					{liked === true
						? 'Upvoted'
						: liked === false
						? 'Downvoted'
						: 'Upvote'}
				</button>
				<button className='btn'>Comments</button>
				<button className='btn'>Share</button>
			</div>
		</div>
	);
}

export default PostCard;
