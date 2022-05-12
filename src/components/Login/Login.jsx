import { Link } from 'react-router-dom';
import Button from '../../comon/Button/Button';
import Input from '../../comon/Input/Input';
import Header from '../Header/Header';
import classes from './Login.module.css';

const Login = () => {
	return (
		<div className={classes.wrapper}>
			<Header />
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
						/>
					</div>
					<div className={classes.password}>
						<Input
							htmlFor={'password'}
							labelText={'Password'}
							type={'password'}
							placeholder={'Enter password'}
							name={'password'}
						/>
					</div>
					<div className={classes.loginBtn}>
						<Button
							onClick={(e) => {
								console.log(e.target.value);
							}}
							text={'Login'}
						/>
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
