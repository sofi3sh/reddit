import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import '../../assets/styles/Sidebar/Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarSection title='' defaultOpen>
				<SidebarItem icon='home' label='Home' active />
				<SidebarItem icon='trending_up' label='Popular' />
				<SidebarItem icon='explore' label='Explore' />
				<SidebarItem icon='list' label='All' />
			</SidebarSection>

			<SidebarSection title='Custom Feeds'>
				<SidebarItem icon='add' label='Create a custom feed' />
			</SidebarSection>

			<SidebarSection title='Recent'>
				<SidebarItem icon='fiber_manual_record' label='r/Kommunismus' />
				<SidebarItem icon='fiber_manual_record' label='r/ZengoWallet' />
				<SidebarItem icon='fiber_manual_record' label='r/assetto_ahoy' />
			</SidebarSection>

			<SidebarSection title='Communities'>
				<SidebarItem icon='add' label='Create a community' />
				<SidebarItem icon='announcement' label='r/announcements' />
				<SidebarItem icon='flag' label='r/de' />
			</SidebarSection>

			<SidebarSection title='Resources'>
				<SidebarItem icon='info' label='About Reddit' />
				<SidebarItem icon='campaign' label='Advertise' />
				<SidebarItem icon='help' label='Help' />
			</SidebarSection>

			<footer className='sidebar-footer'>
				Reddit, Inc. © 2024. All rights reserved.
			</footer>
		</div>
	);
};

export default Sidebar;
