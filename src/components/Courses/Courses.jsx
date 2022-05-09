import CoursesCard from './components/CourseCard/CoursesCard';
import classes from './Courses.module.css';
import TruncateString from 'react-truncate-string';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
import CreateCourse from '../CreateCourse/CreateCourse';

//Main data
export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
	typesetting industry. Lorem Ipsum
	has been the industry's standard dummy text ever since the
	1500s, when an unknown
	printer took a galley of type and scrambled it to make a type
	specimen book. It has survived
	not only five centuries, but also the leap into electronic typesetting, remaining essentially u
	nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
	typesetting industry. Lorem Ipsum
	has been the industry's standard dummy text ever since the
	1500s, when an unknown
	printer took a galley of type and scrambled it to make a type
	specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

//Information about authors
export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

//Get authors id from mockedAuthorsList
export function getAuthorsByIds(arr, authors) {
	const newArr = [];
	arr.map((authorsIds) => {
		mockedAuthorsList.filter((authorsData) => {
			if (authorsData.id === authorsIds) {
				return newArr.push(authorsData.name);
			}
		});
	});
	return newArr.join(', ');
}

//Converting time from hours to minutes
export function getTimeFromMins(mins) {
	let hours = Math.trunc(mins / 60);
	let minutes = mins % 60;
	return hours + ':' + minutes;
}

const Courses = () => {
	//Main state of data
	const [CoursesListData, setCoursesListData] = useState(mockedCoursesList);

	//State for search function
	const [inputValue, setInputValue] = useState('');
	const [searchInput, setSearchInput] = useState('');

	//State for switch to course creation page
	const [isCreating, setIsCreating] = useState(false);

	const [authorList, setAuthorList] = useState(mockedAuthorsList);

	const createAuthorHandle = (author) => {
		setAuthorList([...authorList, author]);
		console.log(authorList);
	};

	const updateCourseList = (course) => {
		setCoursesListData([...CoursesListData, course]);
		setIsCreating(false);
	};

	const handleSearch = () => {
		setSearchInput(inputValue);
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	// TODO use useMemo
	//Function for search courses from title or id
	const filtredCourses = CoursesListData.filter((course) => {
		return (
			course.title.toLowerCase().includes(searchInput.toLowerCase()) ||
			course.id.toLowerCase().includes(searchInput.toLowerCase())
		);
	});

	return (
		<div className={classes.wrapper}>
			{isCreating ? (
				<CreateCourse
					authorList={authorList}
					createAuthorHandle={createAuthorHandle}
					updateCourseList={updateCourseList}
				/>
			) : (
				<div>
					<SearchBar
						type={'text'}
						placeholder={'Enter course name...'}
						id={'search'}
						htmlFor={'search'}
						labelText={null}
						onChange={(e) => setInputValue(e.target.value)}
						textBtn={'Add new course'}
						text={'Search'}
						onClickBtn={(e) => {
							setIsCreating(true);
						}}
						onClickBtnInp={handleSearch}
					/>
					{filtredCourses.map((course) => (
						<CoursesCard
							title={course.title}
							description={course.description}
							creationDate={course.creationDate.replace(/[/]/g, '.')}
							duration={getTimeFromMins(course.duration) + ' hours'}
							authors={getAuthorsByIds(course.authors, authorList)}
							key={course.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Courses;
