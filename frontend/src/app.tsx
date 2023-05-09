import React from 'react';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar/index';

const App = () => {
	return (
		<div className="app">
			<SideBar />

			<div className="content">
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/inbox" element={<div>2</div>} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
