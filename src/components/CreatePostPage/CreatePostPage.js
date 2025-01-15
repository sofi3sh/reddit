import React from 'react';

// importing styles
import '../../assets/styles/CreatePost/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';
import CreatePostForm from './CreatePostForm';

const CreatePost = () => {
	return (
		<div className='create-post'>
			<div className='create-post-wrapper'>
				<div className='main-container'>
					<div className='page-header'>
						<span className='header-title'>Create post</span>

						<Button
							text='Drafts'
							backgroundColor='transparent'
							hoverBackgroundColor='#333d42'
							borderRadius='32px'
							padding='0.8rem 1rem'
							fontSize='0.9rem'
							color='#dbe4db'
						/>
					</div>

					<div className='form-wrapper'>
						<CreatePostForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
