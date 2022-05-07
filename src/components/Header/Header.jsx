import Button from '../../comon/Button/Button';
import Logo from './components/Logo/Logo';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.myHeader}>
			<Logo />
			<div className={classes.btnWrapper}>
				<div className={classes.userNameBox}>
					<p className={classes.userNameText}>Pasha</p>
				</div>
				<Button text={'Logout'} />
			</div>
		</header>
	);
};

export default Header;
