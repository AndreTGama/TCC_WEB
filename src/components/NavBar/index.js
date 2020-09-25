import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { SideBarData } from './SideBarData';
import { IconContext } from 'react-icons';
import ButtonLogout from './ButtonLogout';
import './style.css';


export default function SideBar() {
	const [sideBarActive, setSideBarActive] = useState(true);

	const showSideBar = () => setSideBarActive(!sideBarActive);

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<div className="navbar">
					<Link to="#" className="menu-bars">
						<FaBars onClick={showSideBar} />
					</Link>
				</div>
				<nav className={sideBarActive ? 'nav-menu active' : 'nav-menu'}>
					<ul className="nav-menu-items" onClick={showSideBar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiOutlineClose />
							</Link>
						</li>
						{SideBarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
						<ButtonLogout />
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}
