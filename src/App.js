import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header';

// importing styles
import './assets/styles/App/style.css';

// import pages
import UserPage from './pages/Menu/UserPage';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
	return (
		<>
			<Header />
			<div className='App' style={{ display: 'flex' }}>
				<Sidebar />

				<div
					style={{
						padding: '0',
						flex: '1 1',
						height: '100vh',
					}}
				>
					{/* <UserPage /> */}

					<CreatePost />
				</div>
			</div>
		</>
	);
}

export default App;
