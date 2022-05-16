import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockedCoursesList } from '../Courses/Courses';
import classes from './CourseInfo.module.css';

const CourseInfo = (props) => {
	const { title, description, id, duration, creationDate, authors } = props;

	const courseId = useParams();

	const validCourseId = courseId.courseId.substr(1);
	console.log(validCourseId);

	const filtredCourseById = useMemo(() => {
		const result = mockedCoursesList.filter((course) => {
			if (course.id === validCourseId) {
				console.log(course);
				return course;
			}
		});
		return result;
	}, []);

	return (
		<div className={classes.wrapper}>
			{filtredCourseById.map((course) => {
				<div className={classes.infoWrapper}>
					<div className={classes.backBtnWrapper}>
						<Link to='/courses'> &lt; Back to courses</Link>
					</div>
					<div className={classes.title}>
						<h1>{course.title}</h1>
					</div>
					<div className={classes.infoBox}>
						<div className={classes.description}>{course.description}</div>
						<div className={classes.courseData}>
							<div className={classes.id}>
								<p>
									<strong>ID:&nbsp;</strong>
									{course.id}
								</p>
							</div>
							<div className={classes.duration}>
								<p>
									<strong>Duration:&nbsp;</strong>
									{duration}
								</p>
							</div>
							<div className={classes.creationDate}>
								<p>
									<strong>Created:&nbsp;</strong>
									{course.creationDate}
								</p>
							</div>
							<div className={classes.authors}>
								<div>
									<strong>Authors:&nbsp;</strong>
									<div>{course.authors}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			})}
			{/* <div className={classes.infoWrapper}>
				<div className={classes.backBtnWrapper}>
					<Link to='/courses'> &lt; Back to courses</Link>
				</div>
				<div className={classes.title}>
					<h1>{title}</h1>
				</div>
				<div className={classes.infoBox}>
					<div className={classes.description}>{description}</div>
					<div className={classes.courseData}>
						<div className={classes.id}>
							<p>
								<strong>ID:&nbsp;</strong>
								{id}
							</p>
						</div>
						<div className={classes.duration}>
							<p>
								<strong>Duration:&nbsp;</strong>
								{duration}
							</p>
						</div>
						<div className={classes.creationDate}>
							<p>
								<strong>Created:&nbsp;</strong>
								{creationDate}
							</p>
						</div>
						<div className={classes.authors}>
							<div>
								<strong>Authors:&nbsp;</strong>
								<div>{authors}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}
		</div>
	);
};

export default CourseInfo;
