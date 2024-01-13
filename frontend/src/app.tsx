import Homepage from './components/homepage';
import { Route, Routes, Redirect } from 'react-router-dom';
import SideBar from './components/sidebar/index';
import TopBar from './components/topbar/index';

const App = () => {
	return (
		<div className="app" style={{ backgroundImage: 'url(images/bg.png)' }}>
			<SideBar />

			<div className="content">
				<TopBar />
				<Routes >
					<Route path="/" element={<Homepage />} />
					<Route path="/inbox" element={<div>2</div>} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
