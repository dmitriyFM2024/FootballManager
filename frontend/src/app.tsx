import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar';
import TopBar from './components/topbar';
import Squad from './components/squad';

const App = () => {
	return (
		<div className="app" style={{ backgroundImage: 'url(images/bg.png)' }}>
			<SideBar />

			<div className="content">
				<TopBar />
				<Routes >
					<Route path="/" element={<Homepage />} />
					<Route path="/inbox" element={<div>2</div>} />
					<Route path="/squad" element={<Squad />}/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
