import classes from './Input.module.css';

// todo use object destructuring
const Input = (props) => {
	return (
		<div className={classes.wrapper}>
			<label htmlFor={props.htmlFor}>{props.labelText}</label>
			<input
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				name={props.name}
			/>
		</div>
	);
};

export default Input;
