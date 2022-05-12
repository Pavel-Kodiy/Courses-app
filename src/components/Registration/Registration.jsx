import { Link, useNavigate } from 'react-router-dom';
import Button from '../../comon/Button/Button';
import Input from '../../comon/Input/Input';
import Header from '../Header/Header';
import classes from './Registration.module.css';
import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Regisrtation = () => {
	const [inputValues, setInputValues] = useState({});

	const navigate = useNavigate();

	const newUser = {
		name: inputValues.name,
		password: inputValues.password,
		email: inputValues.email,
	};

	const changeHandle = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	async function fetchUser() {
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);
		if (result.successful === true) {
			console.log('successful');
			return navigate('/login');
		}
		console.log('errrror');
	}

	//TODO Doesn't work with axios
	async function axiosUser() {
		const response = await axios('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response.data);
	}

	return (
		<div className={classes.wrapper}>
			<Header />
			<div className={classes.registrationWrap}>
				<div className={classes.registrationBox}>
					<div className={classes.title}>
						<h1>Registration</h1>
					</div>

					<div className={classes.name}>
						<Input
							htmlFor={'name'}
							labelText={'Name'}
							type={'text'}
							placeholder={'Enter name'}
							name={'name'}
							onChange={(event) => changeHandle(event)}
						/>
					</div>
					<div className={classes.email}>
						<Input
							htmlFor={'email'}
							labelText={'Email'}
							type={'email'}
							placeholder={'Enter email'}
							name={'email'}
							onChange={(event) => changeHandle(event)}
						/>
					</div>
					<div className={classes.password}>
						<Input
							htmlFor={'password'}
							labelText={'Password'}
							type={'password'}
							placeholder={'Enter password'}
							name={'password'}
							onChange={(event) => changeHandle(event)}
						/>
					</div>
					<div className={classes.regisrationBtn}>
						<Button
							onClick={() => {
								console.log(newUser);
								fetchUser();
							}}
							text={'Registration'}
						/>
					</div>
					<div className={classes.infoText}>
						<p>
							If you have an account you can <Link to='/login'>Login</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Regisrtation;
