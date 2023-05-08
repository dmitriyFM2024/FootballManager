import React from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar_list">
                <li className="sidebar_item">
                    <Link to="/homepage">Homepage</Link>
                    <Link to="/inbox">Inbox</Link>
                    <Link to="/squad">Squad</Link>
                    <Link to="/tactic">Tactic</Link>
                    <Link to="/trainings">Training</Link>
                    <Link to="/schedule">Schedule</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;