// SidebarItem.js
import React from 'react';
import icons from '../../iconLoader';

const SidebarItem = ({ icon, label, active = false, onClick}) => {
	const iconPath = icons[icon];

	return (
		<div className={`sidebar-item ${active ? 'active' : ''}`}
		onClick={onClick}>
			{iconPath ? (
				<img
					src={iconPath}
					alt={`${label} icon`}
					className='sidebar-item-icon'
				/>
			) : (
				<span>Icon not found</span>
			)}
			<span className='sidebar-item-label'>{label}</span>
		</div>
	);
};

export default SidebarItem;
