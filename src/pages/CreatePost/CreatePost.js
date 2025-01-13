import React from 'react';

// importing styles
import '../../assets/styles/CreatePost/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';

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

					<div>
						<ButtonDropMenu
							text='Select a community'
							icon={<i className='fa-solid fa-angle-down fa-sm'></i>}
							iconPosition='right'
							backgroundColor='#2a3236'
							hoverBackgroundColor='#333d42'
							activeBackgroundColor='#2a3236'
							activeButtonBorder='none'
							padding='0.7rem 1rem'
							borderRadius='32px'
						/>
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
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
