import Button from '../../comon/Button/Button';
import Input from '../../comon/Input/Input';
import TextArea from '../../comon/TextArea/TextArea';
import {
	getAuthorsById,
	getTimeFromMins,
	mockedAuthorsList,
	mockedCoursesList,
} from '../Courses/Courses';
import classes from './CreateCourse.module.css';
import { useState } from 'react';
import CoursesCard from '../Courses/components/CourseCard/CoursesCard';
import { v4 as uuidv4 } from 'uuid';

//Empty object for creating new authors
//todo make this a state value
const courseAuthorsArray = [];

//Empty object for creating new courses
//TODO rename to more correct value
function getEmptyObj({ title, description, duration, authors }) {
	const emptyObj = {
		id: uuidv4(),
		title,
		description,
		creationDate: String(new Date()),
		duration,
		authors,
	};
	return emptyObj;
}

const CreateCourse = ({ createAuthorHandle, authorList, updateCourseList }) => {
	//State for main data
	const [objArr, setValue] = useState(mockedCoursesList);

	//State for new empty object
	//todo name to inputValues, use changeHandle
	const [obj, setObj] = useState({});

	//State for created authors
	const [createdAuthor, setCreatedAuthor] = useState('');

	//todo rename to more clear value
	function add() {
		const newAuthor = getEmptyObj({
			title: obj.title,
			description: obj.description,
			duration: obj.duration,
			authors: courseAuthorsArray.map(({ id }) => id),
		});
		updateCourseList(newAuthor);
		// setValue([...objArr, obj]); //Adding an object to an array
		// setObj(getEmptyObj()); //Saving an empty object to a state
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

	//State for new authors
	const [newAuthor, setNewAuthor] = useState(courseAuthorsArray);

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
				<Button onClick={add} text={'Create course'} />
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
						<h3>Add author</h3>
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
										setNewAuthor(
											courseAuthorsArray.push({
												id: author.id,
												name: author.name,
											})
										);
										console.log(courseAuthorsArray);

										console.log(mockedAuthorsList);

										console.log(mockedCoursesList);
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
										setNewAuthor(courseAuthorsArray.splice(index, 1));
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
