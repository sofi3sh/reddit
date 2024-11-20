import React from 'react';

// importing styles
import '../../../../assets/styles/UserPage/style.css';

// importing elements
import Button from '../../../../elements/Button';
import ButtonDropMenu from '../../../../elements/ButtonDropMenu';

const Posts = () => {
	return (
		<>
			<div className='actions'>
				<Button
					text='Create Post'
					border='1px solid #858788'
					borderRadius='24px'
					hoverBorder='1px solid #fff'
					backgroundColor='transparent'
					hoverBackgroundColor='transparent'
					fontSize='0.8rem'
					padding='8px 10px'
					color='#fff'
					hoverColor='#fff'
					style={{ lineHeight: '1' }}
					icon={
						<i
							className='fa-solid fa-plus'
							style={{
								fontSize: '0.9rem',
								lineHeight: '1',
								color: '#858788',
							}}
						></i>
					}
				/>

				<ButtonDropMenu
					text='New'
					icon={<i className='fa-solid fa-caret-down'></i>}
					iconPosition='right'
					menuItems={[{ label: 'Sort by' }, { label: 'New' }, { label: 'Top' }]}
					menuDirection='down'
					backgroundColor='transparent'
					hoverBackgroundColor='#333d42'
					fontSize='0.8rem'
					padding='8px 10px'
					color='#8ba2ad'
					hoverColor='#8ba2ad'
					borderRadius='24px'
					menuStyle={{
						fontSize: '0.8rem',
						width: '80px',
						whiteSpace: 'nowrap',
						textAlign: 'center',
						backgroundColor: '#181c1f',
						color: '#fff',
					}}
					activeItemIndex={1}
					activeItemBackgroundColor='#2a3236'
					activeBackgroundColor='transparent'
					activeButtonBorder='none'
					hoverItemBackgroundColor='transparent'
					dropMenuAnimationDuration='0.2s'
					dropMenuAnimationTiming='ease-out'
				/>
			</div>

			<div className='posts'>
				<div className='posts-wrapper'>
					<div className='snoo-img'>
						<img
							src='https://www.redditstatic.com/shreddit/assets/hmm-snoo.png'
							alt='Image of a wondering Snoo'
							width='60px'
						/>
					</div>

					<div className='not-posted-yet'>
						u/Low_Amoeba7719 hasn't posted yet
					</div>
				</div>
			</div>
		</>
	);
};

export default Posts;
