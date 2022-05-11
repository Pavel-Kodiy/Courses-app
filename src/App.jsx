import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';
import { BrowserRouter } from 'react-router-dom';
import Regisrtation from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

const App = () => {
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Header />
				<Courses />
			</BrowserRouter>
		</div>
	);
};

export default App;
