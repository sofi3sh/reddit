import React from 'react';

// importing styles
import '../../../assets/styles/UserPage/style.css';

// importing elements
import Button from '../../../elements/Button';
import ButtonDropMenu from '../../../elements/ButtonDropMenu';

const Options = () => {
	return (
		<div className='options'>
			<Button
				text='Overview'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
				active={true}
			/>

			<Button
				text='Posts'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
			/>

			<Button
				text='Comments'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
			/>

			<Button
				text='Saved'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
			/>

			<Button
				text='Hidden'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
			/>

			<Button
				text='Upvoted'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
			/>

			<Button
				text='Downvoted'
				width='fit-content'
				backgroundColor='transparent'
				activeBackgroundColor='#3d494e'
				hoverBackgroundColor='transparent'
				hoverTextDecoration='underline'
				fontSize='0.9rem'
				borderRadius='24px'
				padding='13px 20px'
				color='#DBE4E9'
			/>
		</div>
	);
};

export default Options;
