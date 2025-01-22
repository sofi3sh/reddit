import React from 'react';

// importing styles
import '../../../assets/styles/UserPage/style.css';

// importing elements
import Button from '../../../elements/Button';

const ProfileSidebar = () => {
	return (
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

					<div className='user-info-block border-top'>
						<span className='block-label'>achievements</span>

						<div className='achievements'>
							<div className='icons'>
								<div className='achievement-icon'>
									<img
										src='https://preview.redd.it/fsx0sxlz96pd1.png?width=100&height=100&crop=smart&auto=webp&s=8c0fa355c102b7e66d6440183ae084b04ec74d77'
										alt='Banana Baby'
										style={{ zIndex: '19', '--left': 0 }}
									/>
								</div>
								<div className='achievement-icon left'>
									<img
										src='https://preview.redd.it/fsx0sxlz96pd1.png?width=100&height=100&crop=smart&auto=webp&s=8c0fa355c102b7e66d6440183ae084b04ec74d77'
										alt='Banana Baby'
										style={{ zIndex: '18', '--left': 22 }}
									/>
								</div>
								<div className='achievement-icon left'>
									<img
										src='https://preview.redd.it/fsx0sxlz96pd1.png?width=100&height=100&crop=smart&auto=webp&s=8c0fa355c102b7e66d6440183ae084b04ec74d77'
										alt='Banana Baby'
										style={{ zIndex: '17', '--left': 43 }}
									/>
								</div>
							</div>
							<div className='text'>
								<a href='' className='achievement-link'>
									Banana Baby,
								</a>
								<a href='' className='achievement-link'>
									Banana Beginner,
								</a>
								<a href='' className='achievement-link'>
									Feed Finder,
								</a>
								<a href='' className='achievement-link'>
									+2 more
								</a>
							</div>
						</div>

						<div className='achievements-info'>
							<span className='unlocked'>5 unlocked</span>

							<Button
								text='View All'
								fontSize='0.75rem'
								backgroundColor='#2a3236'
								hoverBackgroundColor='#333d42'
								hoverTextDecoration='underline'
								color='#fff'
								borderRadius='24px'
								padding='0.7rem 0.6rem'
							/>
						</div>
					</div>

					<div className='user-info-block border-top'>
						<span className='block-label' style={{ margin: '1rem 0' }}>
							settings
						</span>

						<ul className='settings'>
							<li className='user-settings-item'>
								<div className='user-settings'>
									<div className='settings-icon'>
										<img
											src='https://storage.googleapis.com/a1aa/image/PYPzl8HgT1YjERznnBBPDoBCp4rbhubfmtrxjYvqcDxEcq4JA.jpg'
											alt='User Avatar'
										/>
									</div>

									<div className='settings-naming'>
										<span className='settings-label'>Profile</span>
										<span className='settings-subtext'>
											Customize your profile
										</span>
									</div>
								</div>

								<div className='settings-action'>
									<Button
										text='Edit Profile'
										fontSize='0.75rem'
										backgroundColor='#2a3236'
										hoverBackgroundColor='#333d42'
										hoverTextDecoration='underline'
										color='#fff'
										borderRadius='24px'
										padding='0.7rem 0.6rem'
									/>
								</div>
							</li>

							<li className='user-settings-item'>
								<div className='user-settings'>
									<div className='settings-icon'>
										<i className='fa-solid fa-shirt fa-lg'></i>
									</div>

									<div className='settings-naming'>
										<span className='settings-label'>Avatar</span>
										<span className='settings-subtext'>
											Customize and style
										</span>
									</div>
								</div>

								<div className='settings-action'>
									<Button
										text='Style Avatar'
										fontSize='0.75rem'
										backgroundColor='#2a3236'
										hoverBackgroundColor='#333d42'
										hoverTextDecoration='underline'
										color='#fff'
										borderRadius='24px'
										padding='0.7rem 0.6rem'
									/>
								</div>
							</li>

							<li className='user-settings-item'>
								<div className='user-settings'>
									<div className='settings-icon'>
										<i className='fa-solid fa-shield fa-lg'></i>
									</div>

									<div className='settings-naming'>
										<span className='settings-label'>Moderation</span>
										<span className='settings-subtext'>Moderation Tools</span>
									</div>
								</div>

								<div className='settings-action'>
									<Button
										text='Mod Settings'
										fontSize='0.75rem'
										backgroundColor='#2a3236'
										hoverBackgroundColor='#333d42'
										hoverTextDecoration='underline'
										color='#fff'
										borderRadius='24px'
										padding='0.7rem 0.6rem'
									/>
								</div>
							</li>
						</ul>
					</div>

					<div className='user-info-block border-top'>
						<span className='block-label' style={{ margin: '1rem 0' }}>
							links
						</span>

						<Button
							icon={<i className='fa-solid fa-plus'></i>}
							text='Add Social Link'
							fontSize='0.75rem'
							backgroundColor='#2a3236'
							hoverBackgroundColor='#333d42'
							hoverTextDecoration='underline'
							color='#fff'
							borderRadius='24px'
							padding='0.6rem 0.6rem'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSidebar;
