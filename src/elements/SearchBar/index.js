import React from 'react';

// importing styles
import '../../assets/styles/SearchBar/style.css';

function SearchBar() {
	return (
		<div className='search-container'>
			<i className='fas fa-search'></i>
			<input type='text' placeholder='Search Reddit' />
		</div>
	);
}

export default SearchBar;
