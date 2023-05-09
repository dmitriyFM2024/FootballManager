import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiMail } from 'react-icons/hi';
import { GiDarkSquad } from 'react-icons/gi';
import { AiOutlineForm, AiOutlineSchedule } from 'react-icons/ai';
import { BsConeStriped, BsShieldShaded } from 'react-icons/bs';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';

import './styles/index.scss';

const SideBar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar_list">
				<NavLink to="/homepage" className="sidebar_item">
					<HiHome />
					<span>Homepage</span>
				</NavLink>
				<NavLink to="/inbox" className="sidebar_item">
					<HiMail />
					<span>Inbox</span>
				</NavLink>
				<NavLink to="/squad" className="sidebar_item">
					<GiDarkSquad />
					<span>Squad</span>
				</NavLink>
				<NavLink to="/tactic" className="sidebar_item">
					<AiOutlineForm />
					<span>Tactic</span>
				</NavLink>
				<NavLink to="/trainings" className="sidebar_item">
					<BsConeStriped />
					<span>Training</span>
				</NavLink>
				<NavLink to="/schedule" className="sidebar_item">
					<AiOutlineSchedule />
					<span>Schedule</span>
				</NavLink>
				<NavLink to="/club" className="sidebar_item">
					<BsShieldShaded />
					<span>Club</span>
				</NavLink>
				<NavLink to="/finance" className="sidebar_item">
					<RiMoneyDollarBoxFill />
					<span>Finance</span>
				</NavLink>
			</ul>

			<div className="sidebar_bottom">
				<div className="sidebar_logo">IManager</div>
				<div className="sidebar_version">Version 0.01</div>
			</div>
		</div>
	);
};

export default SideBar;
