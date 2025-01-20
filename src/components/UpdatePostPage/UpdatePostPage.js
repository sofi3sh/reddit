import React from 'react';

// importing styles
import '../../assets/styles/UpdatePost/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';
import UpdatePostForm from './UpdatePostForm';

const CreatePost = () => {
	return (
		<div className='update-post'>
			<div className='update-post-wrapper'>
				<div className='main-container'>
					<div className='page-header'>
						<span className='header-title'>Edit post</span>

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
						<UpdatePostForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
