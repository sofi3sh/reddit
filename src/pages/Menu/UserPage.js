import React from 'react';

// importing styles
import '../../assets/styles/UserPage/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';

const UserPage = () => {
	return (
		<div className='user-page'>
			<div className='user-page-wrapper'>
				<div className='main-container'>
					<div className='main-container-header'>
						<div className='user-avatar-wrapper'>
							<div className='user-avatar'>
								<img
									alt='User Avatar'
									src='https://storage.googleapis.com/a1aa/image/PYPzl8HgT1YjERznnBBPDoBCp4rbhubfmtrxjYvqcDxEcq4JA.jpg'
								/>
							</div>

							<a href='#' className='edit-avatar'>
								<i className='fa-regular fa-pen-to-square'></i>
							</a>
						</div>

						<div className='user-name-wrapper'>
							<div className='user-name'>
								<span className='user-name-text'>Low_Amoeba7719</span>
								<span className='user-name-subtext'>u/Low_Amoeba7719</span>
							</div>
						</div>
					</div>

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
							menuItems={[
								{ label: 'Sort by' },
								{ label: 'New' },
								{ label: 'Top' },
							]}
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
				</div>

				<div className='right-side-container'>
					<a href='#' className='edit-back'>
						<i className='fa-regular fa-pen-to-square'></i>
					</a>

					<div className='user-info'>
						<div className='user-info-header'>
							<span className='username'>Low_Amoeba7719</span>

							<Button
								text='Share'
								icon={<i className='fa-solid fa-share'></i>}
								backgroundColor='#2a3236'
								hoverBackgroundColor='#333d42'
								fontSize='0.75rem'
								padding='0.6rem 0.7rem'
								borderRadius='12px'
							/>
						</div>

						<div className='user-info-body'>
							<div className='user-info-block'>
								<div className='info-wrapper'>
									<div className='info'>
										<span className='info-text'>1</span>
										<span className='info-label'>Post Karma</span>
									</div>

									<div className='info'>
										<span className='info-text'>0</span>
										<span className='info-label'>Comment karma</span>
									</div>

									<div className='info'>
										<span className='info-text'>Nov 15, 2024</span>
										<span className='info-label'>Cake day</span>
									</div>

									<div className='info'>
										<span className='info-text'>0</span>
										<span className='info-label'>Gold earned</span>
									</div>
								</div>
							</div>

							<div className='user-info-block'>
								<span className='block-label'>achievements</span>

								<div className='achievements'>
									<div className='icons'>
										<div className='achievement-icon'>
											<img
												src='https://preview.redd.it/fsx0sxlz96pd1.png?width=100&height=100&crop=smart&auto=webp&s=8c0fa355c102b7e66d6440183ae084b04ec74d77'
												alt='Banana Baby'
												style={{ zIndex: '19' }}
											/>
										</div>
										<div className='achievement-icon'>
											<img
												src='https://preview.redd.it/fsx0sxlz96pd1.png?width=100&height=100&crop=smart&auto=webp&s=8c0fa355c102b7e66d6440183ae084b04ec74d77'
												alt='Banana Baby'
												style={{ zIndex: '18' }}
											/>
										</div>
										<div className='achievement-icon'>
											<img
												src='https://preview.redd.it/fsx0sxlz96pd1.png?width=100&height=100&crop=smart&auto=webp&s=8c0fa355c102b7e66d6440183ae084b04ec74d77'
												alt='Banana Baby'
												style={{ zIndex: '17' }}
											/>
										</div>
									</div>
									<div className='text'></div>
								</div>
							</div>

							{/* <div className='user-info-block'></div> */}

							{/* <div className='user-info-block'></div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
