import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import { useEffect } from 'react';

//import components
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header';

// importing styles
import './assets/styles/App/style.css';

// import pages
import UserPage from './pages/Menu/UserPage';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import ContributorProgramPage from './components/ContributorProgramPage/ContributorProgramPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

const fetchData = async () => {
	try {
		const response = await axios.get('http://127.0.0.1:8000/api/user');
		console.log(response.data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

function App() {
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Router>
			<div>
				<Header />
				<div className='App' style={{ display: 'flex' }}>
					<Routes>
						<Route
							path='/userpage'
							element={
								<>
									<Sidebar />
									<div
										style={{
											padding: '0',
											flex: '1 1',
											height: '100vh',
										}}
									>
										<UserPage />
									</div>
								</>
							}
						/>
						<Route
							path='/contributor-program'
							element={
								<div
									style={{
										flex: '1 1',
										height: '100vh',
									}}
								>
									<ContributorProgramPage />
								</div>
							}
						/>

						<Route
							path='/settings'
							element={
								<>
									<Sidebar />
									<div
										style={{
											padding: '0',
											flex: '1 1',
											height: '100vh',
										}}
									>
										<SettingsPage />
									</div>
								</>
							}
						/>

						<Route
							path='/'
							element={
								<>
									<Sidebar />
									<div
										style={{
											padding: '0',
											flex: '1 1',
											height: '100vh',
										}}
									>
										<MainPage />
									</div>
								</>
							}
						/>

						<Route
							path='/createPost'
							element={
								<>
									<Sidebar />
									<div
										style={{
											padding: '0',
											flex: '1 1',
											height: '100vh',
										}}
									>
										<CreatePost />
									</div>
								</>
							}
						/>

						<Route
							path='/post/edit'
							element={
								<>
									<Sidebar />
									<div
										style={{
											padding: '0',
											flex: '1 1',
											height: '100vh',
										}}
									>
										<EditPost />
									</div>
								</>
							}
						/>

						<Route
							path='/login'
							element={
								<>
									<Sidebar />
									<div
										style={{
											padding: '0',
											flex: '1 1',
											height: '100vh',
										}}
									>
										<Login />
									</div>
								</>
							}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}
export default App;
