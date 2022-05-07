import classes from './TextArea.module.css';

const TextArea = (props) => {
	return (
		<div className={classes.wrapper}>
			<label htmlFor={props.htmlFor}>{props.labelText}</label>
			<textarea
				rows={props.rows}
				cols={props.cols}
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default TextArea;
