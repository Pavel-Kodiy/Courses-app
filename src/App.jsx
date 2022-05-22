import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regisrtation from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/src/store';

const App = () => {
	return (
		<div className='wrapper'>
			<Provider store={store}>
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
			</Provider>
		</div>
	);
};

export default App;
