import React from 'react';

// importing styles
import '../../../assets/styles/UserPage/style.css';

const Header = () => {
	return (
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
	);
};

export default Header;
