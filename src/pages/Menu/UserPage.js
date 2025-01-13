import React from 'react';

// importing styles
import '../../assets/styles/UserPage/style.css';

// importing elements
import Button from '../../elements/Button';
import ButtonDropMenu from '../../elements/ButtonDropMenu';

// importing components
import UserPageLayout from '../../components/Profile/main';

const UserPage = () => {
	return (
		<div className='user-page'>
			<UserPageLayout />
		</div>
	);
};

export default UserPage;
