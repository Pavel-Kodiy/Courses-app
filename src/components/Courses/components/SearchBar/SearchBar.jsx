import Button from '../../../../comon/Button/Button';
import Input from '../../../../comon/Input/Input';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.searchWrap}>
				<div className={classes.inputWrap}>
					<Input
						type={props.type}
						placeholder={props.placeholder}
						id={props.id}
						htmlFor={props.htmlFor}
						labelText={props.labelText}
						onChange={props.onChange}
					/>
				</div>
				<Button onClick={props.onClickBtnInp} text={props.text} />
			</div>
			<div>
				<Button onClick={props.onClickBtn} text={props.textBtn} />
			</div>
		</div>
	);
};

export default SearchBar;
