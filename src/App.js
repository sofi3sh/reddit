import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}> {/*  */}</div>
    </div>
  );
}

export default App;
