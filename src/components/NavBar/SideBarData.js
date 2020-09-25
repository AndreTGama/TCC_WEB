import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosCalendar } from "react-icons/io";
import { ImExit } from "react-icons/im";


export const SideBarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Dash',
		path: '/dash',
		icon: <IoIosCalendar />,
		cName: 'nav-text'
	},
]