import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import '../../assets/styles/Sidebar/Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
				<SidebarItem icon='home_white' label='Home' active />
				<SidebarItem icon='popular_white' label='Popular' />

			<div className='line'></div>

			<SidebarSection title='TOPICS'>
				<SidebarItem icon='internet_culture_white' label='Internet Culture (Viral)' />
				<SidebarItem icon='games_white' label='Games' />
				<SidebarItem icon='q&as_white' label='Q&As' />
				<SidebarItem icon='technology_white' label='Technology' />
				<SidebarItem icon='pop_culture_white' label='Pop Culture' />
				<SidebarItem icon='movies_white' label='Movies & TV' />
			</SidebarSection>

			<div className='line'></div>

			<SidebarSection title='Resources'>
				<SidebarItem icon='about_reddit_white' label='About Reddit' />
				<SidebarItem icon='advertise_white' label='Advertise' />
				<SidebarItem icon='help_white' label='Help' />
				<SidebarItem icon='blog_white' label='Blog' />
				<SidebarItem icon='careers_white' label='Careers' />
				<SidebarItem icon='press_white' label='Press' />
			</SidebarSection>

			<div className='line'></div>

			<SidebarItem icon='communities_white' label='Communities' />
			<SidebarItem icon='best_of_reddit_white' label='Best of Reddit' />
			<SidebarItem icon='topics_white' label='Topics' />

			<div className='line'></div>

			<SidebarItem icon='content_policy_white' label='Content Policy' />
			<SidebarItem icon='privacy_policy_white' label='Privacy Policy' />
			<SidebarItem icon='user_agreement_white' label='User Agreement' />

			<footer className='sidebar-footer'>
				Reddit, Inc. © 2024. All rights reserved.
			</footer>
		</div>
	);
};

export default Sidebar;
