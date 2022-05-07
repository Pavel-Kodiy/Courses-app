import classes from './Button.module.css';
//todo read about classNames library
const Button = (props) => {
	// props => type === 'danger'
	// btn btn-primary btn-danger btn
	// const classes = cn({
	// 	classes.myBt: true,
	// 	classes.red: type === 'red'
	// })
	return (
		<button onClick={props.onClick} className={classes.myBtn}>
			{props.text}
		</button>
	);
};

export default Button;
