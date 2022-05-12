import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Regisrtation from './components/Registration/Registration';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';

const App = () => {
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/registration' element={<Regisrtation />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
