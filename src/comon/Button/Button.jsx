import classes from './Button.module.css';
//todo read about classNames library
const Button = (props) => {
	// props => type === 'danger'
	// btn btn-primary btn-danger btn
	// const classes = cn({
	// 	classes.myBt: true,
	// 	classes.red: type === 'red'
	// })
	const { onClick, text } = props;
	return (
		<button onClick={onClick} className={classes.myBtn}>
			{text}
		</button>
	);
};

export default Button;
