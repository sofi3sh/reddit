import React from 'react';

// importing assets(images, etc...)
import logo from '../../assets/images/logos/reddit-logo.svg';

// importing styles
import '../../assets/styles/Header/style.css';

// importing components
import SearchBar from '../../elements/SearchBar';

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-logo'>
					<a href='#' className='reddit-logo'>
						<span className='logo'>
							<img height={50} width={120} src={logo} alt='RedditLogo' />
						</span>
					</a>
				</div>

				<div className='header-search-bar'>
					<div className='search-wrapper'>
						<SearchBar />
					</div>
				</div>

				<div className='header-links'>
					<div className='navbar'>
						<div className='header-link-button'>
							<a href='' className='header-link'>
								<i className='fas fa-mouse-pointer'></i>
							</a>
						</div>

						<div className='header-link-button'>
							<a href='' className='header-link'>
								<i className='fa-regular fa-comment-dots'></i>
							</a>
						</div>

						<div className='header-link-button create-button'>
							<div className='create'>
								<a href='' className='header-link'>
									<i className='fa-regular fa-plus plus-icon'></i>
									<span>Create</span>
								</a>
							</div>
						</div>

						<div className='header-link-button'>
							<a href='' className='header-link'>
								<i className='fas fa-bell'></i>
							</a>
						</div>

						<div className='header-link-button'>
							<div className='profile'>
								<a href='' className='header-link'>
									<img
										alt='Profile picture with a pink background and a green status dot'
										height='30'
										src='https://storage.googleapis.com/a1aa/image/PYPzl8HgT1YjERznnBBPDoBCp4rbhubfmtrxjYvqcDxEcq4JA.jpg'
										width='30'
									/>
									<div className='status'></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
