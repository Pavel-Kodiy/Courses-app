import classes from './TextArea.module.css';

const TextArea = (props) => {
	const {
		htmlFor,
		labelText,
		rows,
		cols,
		type,
		placeholder,
		id,
		name,
		onChange,
	} = props;

	return (
		<div className={classes.wrapper}>
			<label htmlFor={htmlFor}>{labelText}</label>
			<textarea
				rows={rows}
				cols={cols}
				type={type}
				placeholder={placeholder}
				id={id}
				name={name}
				onChange={onChange}
			/>
		</div>
	);
};

export default TextArea;
