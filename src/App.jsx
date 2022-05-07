import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Courses />
		</div>
	);
};

export default App;
