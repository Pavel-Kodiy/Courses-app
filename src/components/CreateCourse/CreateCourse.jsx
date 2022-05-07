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

const courseAuthorsArray = [];

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
	const [objArr, setValue] = useState(mockedCoursesList);
	const [obj, setObj] = useState(mockedCoursesList);

	function add() {
		setValue([...objArr, obj]); // добавление объекта к массиву
		setObj(getEmptyObj()); // сохранение пустого объекта в стейт
	}

	function change(prop, event) {
		// изменение свойства при вводе
		setObj({ ...obj, [prop]: event.target.value });
	}

	/*
	function getFOO(arr) {
		const newArr = [];
		for (let str of arr) {
			const arr = objArr;
			for (let obj of arr) {
				if (obj.id === str) {
					newArr.push(obj.name);
				}
			}
		}
		return newArr.join(', ');
	}

	 	function foo() {
		mockedCoursesList.push({
			id: obj.id,
			title: obj.title,
			description: obj.description,
			creationDate: '',
			duration: obj.duration,
			authors: obj.authors,
		});
	} */

	const result = objArr.map((obj) => {
		// вывод сохранённого массива объектов
		{
			console.log(obj.creationDate);
		}

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

	const [newAuthor, setNewAuthor] = useState(courseAuthorsArray);

	const [authorsArray, setAuthorsArray] = useState(mockedAuthorsList);
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
