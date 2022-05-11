import classes from './Input.module.css';

// todo use object destructuring
const Input = (props) => {
	const { htmlFor, labelText, type, placeholder, id, value, onChange, name } =
		props;

	return (
		<div className={classes.wrapper}>
			<label htmlFor={htmlFor}>{labelText}</label>
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				value={value}
				onChange={onChange}
				name={name}
			/>
		</div>
	);
};

export default Input;
