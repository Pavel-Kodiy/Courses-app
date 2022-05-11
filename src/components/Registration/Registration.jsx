import Button from '../../comon/Button/Button';
import Input from '../../comon/Input/Input';
import Header from '../Header/Header';
import classes from './Registration.module.css';

const Regisrtation = (props) => {
	return (
		<div className={classes.wrapper}>
			<Header />
			<div className={classes.registrationWrap}>
				<div className={classes.registrationBox}>
					<h1>Registration</h1>
					<div className={classes.name}>
						<Input
							htmlFor={'name'}
							labelText={'Name'}
							type={'text'}
							placeholder={'Enter name'}
							id={''}
							name={'name'}
						/>
					</div>
					<div className={classes.email}>
						<Input
							htmlFor={'email'}
							labelText={'Email'}
							type={'email'}
							placeholder={'Enter email'}
							id={''}
							name={'email'}
						/>
					</div>
					<div className={classes.password}>
						<Input
							htmlFor={'password'}
							labelText={'Password'}
							type={'text'}
							placeholder={'Enter password'}
							id={''}
							name={'password'}
						/>
					</div>
					<div className={classes.regisrationBtn}>
						<Button
							onClick={(e) => {
								console.log(e.target.value);
							}}
							text={'Registration'}
						/>
					</div>
					<div className={classes.infoText}>
						<p>
							If you hav an account you can <a>Login</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Regisrtation;
