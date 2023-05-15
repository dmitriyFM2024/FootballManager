import React from 'react';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar/index';
import TopBar from './components/topbar/index';

const App = () => {
	return (
		<div className="app" style={{ backgroundImage: 'url(images/bg.png)' }}>
			<SideBar />
			<TopBar />

			{/* <div className="content">
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/inbox" element={<div>2</div>} />
				</Routes>
			</div> */}
		</div>
	);
};

export default App;
