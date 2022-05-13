import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Regisrtation from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';

const App = () => {
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Courses />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/registration' element={<Regisrtation />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses/add' element={<CreateCourse />} />
					<Route path='/courses/:courseId' element={<CourseInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
