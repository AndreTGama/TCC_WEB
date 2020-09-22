import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

export default function SideBar() {
	const [sideBar, setSideBar] = useState(false);

	const showSideBar = () => setSideBar(!sideBar);
	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<FaBars onClick={showSideBar} />
				</Link>
			</div>
			<nav className={SideBar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiOutlineClose />
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
