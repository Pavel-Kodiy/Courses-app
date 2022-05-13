import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../comon/Button/Button';
import Input from '../../comon/Input/Input';
import Header from '../Header/Header';
import classes from './Login.module.css';

const Login = () => {
	const [inputValues, setInputValues] = useState({});

	const navigate = useNavigate();

	const User = {
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
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(User),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);
		if (result.successful === true) {
			console.log('successful');
			localStorage.setItem('token', result.result);
			localStorage.setItem('email', result.user.email);
			localStorage.setItem('name', result.user.name);
			return navigate('/courses');
		}
		console.log('errrror');
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.loginWrap}>
				<div className={classes.loginBox}>
					<div className={classes.title}>
						<h1>Login</h1>
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
					<div className={classes.loginBtn}>
						<Button onClick={fetchUser} text={'Login'} />
					</div>
					<div className={classes.infoText}>
						<p>
							If you not have an account you can{' '}
							<Link to='/registration'>Registration</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
