import Button from '../../comon/Button/Button';
import Input from '../../comon/Input/Input';
import TextArea from '../../comon/TextArea/TextArea';
import { getTimeFromMins, mockedAuthorsList } from '../Courses/Courses';
import classes from './CreateCourse.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const courseAuthorsArray = [];

//Empty object for creating new courses
function getNewCoursesList({ title, description, duration, authors }) {
	const newCourseList = {
		id: uuidv4(),
		title,
		description,
		creationDate: getCreationDate(new Date()),
		duration,
		authors,
	};
	return newCourseList;
}

function getCreationDate(date) {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	return (date = dd + '/' + mm + '/' + yyyy);
}

const CreateCourse = ({ createAuthorHandle, authorList, updateCourseList }) => {
	//State for created authors
	const [createdAuthor, setCreatedAuthor] = useState('');

	//State for new course
	let [newCourse, setNewCourse] = useState(courseAuthorsArray);

	function showNewCoursesList() {
		if (
			inputValues.title.length < 2 ||
			!inputValues.description ||
			inputValues.description.length < 2 ||
			!inputValues.title ||
			inputValues.duration <= 0 ||
			!inputValues.duration
		) {
			return alert('Please, fill in all fields.');
		} else {
			newCourse = getNewCoursesList({
				title: inputValues.title,
				description: inputValues.description,
				duration: inputValues.duration,
				authors: courseAuthorsArray.map(({ id }) => id),
			});
			updateCourseList(newCourse);
		}
	}

	const [inputValues, setInputValues] = useState({});

	const changeHandle = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	const onAuthorCreate = () => {
		createAuthorHandle({
			id: uuidv4(),
			name: createdAuthor,
		});
		setCreatedAuthor('');
	};

	const result = [];

	const [authorsArray, setAuthorsArray] = useState(mockedAuthorsList);

	return (
		<div className={classes.wrapper}>
			<div className={classes.titleBox}>
				<div className={classes.title}>
					<Input
						htmlFor={'title'}
						type={'text'}
						placeholder={'Enter title...'}
						id={'title'}
						labelText={'Title'}
						name={'title'}
						onChange={(event) => changeHandle(event)}
					/>
				</div>
				<Button onClick={showNewCoursesList} text={'Create course'} />
			</div>
			<div className={classes.description}>
				<TextArea
					rows={4}
					htmlFor={'description'}
					placeholder={'Enter description...'}
					id={'description'}
					labelText={'Description'}
					name={'description'}
					onChange={(event) => changeHandle(event)}
				/>
			</div>
			<div className={classes.bottomBox}>
				<div className={classes.authorsSection}>
					<div className={classes.addAuthor}>
						<h3>showNewCoursesList author</h3>
						<Input
							htmlFor={'authors'}
							type={'text'}
							placeholder={'Enter author name...'}
							id={'authors'}
							labelText={'Author name'}
							value={createdAuthor}
							name={'authors'}
							onChange={(event) => {
								changeHandle(event);
								setCreatedAuthor(event.target.value);
							}}
						/>
						<div className={classes.createAuthorBtn}>
							<Button onClick={onAuthorCreate} text={'Create author'} />
						</div>
					</div>
					<div className={classes.authorsList}>
						<h3>Authors</h3>
						{authorList.map((author) => (
							<div key={author.id} className={classes.generateAuthorList}>
								<p>{author.name}</p>
								<Button
									onClick={() => {
										setAuthorsArray(
											courseAuthorsArray.push({
												id: author.id,
												name: author.name,
											})
										);
									}}
									text={'Add author'}
								/>
							</div>
						))}
					</div>
				</div>
				<div className={classes.bottomSection}>
					<div className={classes.duration}>
						<h3>Duration</h3>
						<Input
							htmlFor={'duration'}
							type={'number'}
							placeholder={'Enter duration in minutes...'}
							id={'duration'}
							labelText={'Duration'}
							name={'duration'}
							onChange={(event) => {
								changeHandle(event);
								getTimeFromMins(event.target.value);
							}}
						/>
						<div className={classes.counter}>
							<p>
								Duration:{' '}
								<span>
									{inputValues.duration > 0
										? getTimeFromMins(inputValues.duration)
										: '00:00'}
								</span>{' '}
								hours
							</p>
						</div>
					</div>
					<div className={classes.courseAuthors}>
						<h3>Course authors</h3>
						{courseAuthorsArray.map((author) => (
							<div key={uuidv4()} className={classes.generateAuthorList}>
								<p>{author.name}</p>
								<Button
									onClick={() => {
										let index = courseAuthorsArray.findIndex(
											(el) => el.name === author.name
										);
										console.log(index);
										console.log(author);
										setAuthorsArray(courseAuthorsArray.splice(index, 1));
									}}
									text={'Delete author'}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			{result}
		</div>
	);
};

export default CreateCourse;
