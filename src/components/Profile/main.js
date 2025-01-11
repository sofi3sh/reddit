import React from 'react';

// importing styles
import '../../assets/styles/UserPage/style.css';

// importing components
import Header from './profile-main/header';
import Options from './profile-main/options';
import ProfileSidebar from './profile-sidebar/profile-sidebar';
import Content from './profile-main/content';

const UserPageLayout = () => {
	return (
		<div className='user-page-wrapper'>
			<div className='main-container'>
				<Header />

				<Options />

				<Content />
			</div>

			<ProfileSidebar />
		</div>
	);
};

export default UserPageLayout;
