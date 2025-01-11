import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header';
import { HomePage } from './pages/HomePage';

function App() {
	return (
		<>
			<Header />
			<div className='App' style={{ display: 'flex' }}>
				<Sidebar />
				{/* <div style={{ padding: '20px', flexGrow: 1 }}> { }</div> */}
				<HomePage/> 
			</div>
		</>
	);
}

export default App;
