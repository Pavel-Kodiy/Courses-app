import { useNavigate } from 'react-router-dom';
import Button from '../../comon/Button/Button';
import Logo from './components/Logo/Logo';
import classes from './Header.module.css';

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className={classes.myHeader}>
			<Logo />
			<div className={classes.btnWrapper}>
				<div className={classes.userNameBox}>
					<p className={classes.userNameText}>{localStorage.getItem('name')}</p>
				</div>
				<Button
					text={'Logout'}
					onClick={() => {
						localStorage.clear();
						navigate('/registration');
					}}
				/>
			</div>
		</header>
	);
};

export default Header;
