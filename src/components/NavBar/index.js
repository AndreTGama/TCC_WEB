import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars, FaGem, FaHeart } from 'react-icons/fa';
import { SideBarData } from './SideBarData';
import { IconContext } from 'react-icons';
import ButtonLogout from './ButtonLogout';
import './style.css';
import { useSelector } from 'react-redux';

export default function SideBar() {
	const [sideBarActive, setSideBarActive] = useState(false);
	const userActualType = useSelector(
		(state) => state.UserFunctionsReducer.functions
	);
	const showSideBar = () => setSideBarActive(!sideBarActive);

	const sideBar = SideBarData.map(
		({ id, title, path, icon, cName, dropDown, index }) => (
			<>
				<li key={index} className={cName}>
					{dropDown ? (
						<a
							data-toggle="collapse"
							href={`#collaspse${path}`}
							role="button"
							id={path}
							aria-expanded="false"
							aria-controls={`collaspse${path}`}
							className="nav-link sidebar-link text-light p-2"
						>
							<span className="mr-3 sidebar-icons">{icon}</span>
							{title}
						</a>
					) : (
						<Link
							to={`${path}`}
							className="nav-link sidebar-link text-light p-2"
						>
							<span className="mr-3 sidebar-icons">{icon}</span>
							{title}
						</Link>
					)}
					<div
						className="collapse multi-collapse"
						id={`collaspse${path}`}
					>
						<div className="sidebar-item">
							{Array.isArray(dropDown) ? (
								<ul>
									{dropDown.map((subItem) => (
										<li
											className="submenusidebar"
											key={subItem.id}
										>
											<Link
												to={subItem.path}
												className={subItem.cName}
											>
												{subItem.title}
											</Link>
										</li>
									))}
								</ul>
							) : null}
						</div>
					</div>
				</li>
			</>
		)
	);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className="navbar">
					<Link
						to="#"
						className="menu-bars"
						style={{ color: 'blue' }}
					>
						<FaBars
							className="menu-bars-navbar"
							onClick={showSideBar}
						/>
					</Link>
				</div>
				<nav className={sideBarActive ? 'nav-menu active' : 'nav-menu'}>
					<ul className="nav-menu-items">
						<li className="navbar-toggle">
							<Link
								to="#"
								className="menu-bars"
								onClick={showSideBar}
							>
								<AiOutlineClose />
							</Link>
						</li>
						{sideBar}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}
