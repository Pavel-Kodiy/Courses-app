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
const courseAuthorsArray = [];

//Empty object for creating new courses
function getEmptyObj() {
	const emptyObj = {
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: String(new Date()),
		duration: '00:00',
		authors: [],
	};
	return emptyObj;
}

const CreateCourse = (props) => {
	//State for main data
	const [objArr, setValue] = useState(mockedCoursesList);

	//State for new empty object
	const [obj, setObj] = useState(mockedCoursesList);

	function add() {
		setValue([...objArr, obj]); //Adding an object to an array
		setObj(getEmptyObj()); //Saving an empty object to a state
	}

	function change(prop, event) {
		//Property change on input
		setObj({ ...obj, [prop]: event.target.value });
	}

	const result = objArr.map((obj) => {
		//Output of the stored array of objects

		return (
			<CoursesCard
				title={obj.title}
				description={obj.description}
				duration={getTimeFromMins(obj.duration) + ' hours'}
				authors={getAuthorsById(obj.authors)}
				creationDate={obj.creationDate.replace(/[/]/g, '.')}
				key={obj.id}
			/>
		);
	});

	//State for new authors
	const [newAuthor, setNewAuthor] = useState(courseAuthorsArray);

	//State for authors data
	const [authorsArray, setAuthorsArray] = useState(mockedAuthorsList);

	//State for created authors
	const [createdAuthor, setCreatedAuthor] = useState([]);

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
							onChange={(event) => {
								change('authors', event);
								setCreatedAuthor(event.target.value);
							}}
						/>
						<div className={classes.createAuthorBtn}>
							<Button
								onClick={() => {
									console.log(createdAuthor);
									setAuthorsArray(
										mockedAuthorsList.push({
											id: uuidv4(),
											name: createdAuthor,
										})
									);
									console.log(mockedAuthorsList);
								}}
								text={'Create author'}
							/>
						</div>
					</div>
					<div className={classes.authorsList}>
						<h3>Authors</h3>
						{mockedAuthorsList.map((author) => (
							<div key={uuidv4()} className={classes.generateAuthorList}>
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
