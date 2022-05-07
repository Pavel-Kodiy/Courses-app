import classes from './Input.module.css';

const Input = (props) => {
	return (
		<div className={classes.wrapper}>
			<label htmlFor={props.htmlFor}>{props.labelText}</label>
			<input
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default Input;
