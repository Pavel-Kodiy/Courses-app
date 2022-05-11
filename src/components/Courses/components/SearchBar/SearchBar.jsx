import Button from '../../../../comon/Button/Button';
import Input from '../../../../comon/Input/Input';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
	const {
		type,
		placeholder,
		id,
		htmlFor,
		labelText,
		onChange,
		onClickBtnInp,
		text,
		onClickBtn,
		textBtn,
	} = props;

	return (
		<div className={classes.wrapper}>
			<div className={classes.searchWrap}>
				<div className={classes.inputWrap}>
					<Input
						type={type}
						placeholder={placeholder}
						id={id}
						htmlFor={htmlFor}
						labelText={labelText}
						onChange={onChange}
					/>
				</div>
				<Button onClick={onClickBtnInp} text={text} />
			</div>
			<div>
				<Button onClick={onClickBtn} text={textBtn} />
			</div>
		</div>
	);
};

export default SearchBar;
