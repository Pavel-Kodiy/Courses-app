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
	//State for new empty object
	const [obj, setObj] = useState({});

	//State for created authors
	const [createdAuthor, setCreatedAuthor] = useState('');

	//State for new course
	let [newCourse, setNewCourse] = useState(courseAuthorsArray);

	function showNewCoursesList() {
		if (
			obj.title === undefined ||
			obj.title.length < 2 ||
			obj.description === undefined ||
			obj.description.length < 2 ||
			obj.duration <= 0 ||
			obj.duration === undefined
		) {
			return alert('Please, fill in all fields.');
		} else {
			newCourse = getNewCoursesList({
				title: obj.title,
				description: obj.description,
				duration: obj.duration,
				authors: courseAuthorsArray.map(({ id }) => id),
			});
			updateCourseList(newCourse);
		}
	}

	function change(prop, event) {
		//Property change on input
		setObj({ ...obj, [prop]: event.target.value });
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

	//State for authors data
	//todo make new authors a state
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
						name='title'
						onChange={(event) => change('title', event)}
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
					onChange={(event) => change('description', event)}
				/>
			</div>
			<div className={classes.bottomBox}>
				<div className={classes.authorsSection}>
					<div className={classes.addAuthor}>
						<h3>showNewCoursesList author</h3>
						<Input
							htmlFor={'author'}
							type={'text'}
							placeholder={'Enter author name...'}
							id={'author'}
							labelText={'Author name'}
							value={createdAuthor}
							onChange={(event) => {
								change('authors', event);
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
							onChange={(event) => {
								change('duration', event);
								getTimeFromMins(event.target.value);
							}}
						/>
						<div className={classes.counter}>
							<p>
								Duration:{' '}
								<span>
									{obj.duration > 0 ? getTimeFromMins(obj.duration) : '00:00'}
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
