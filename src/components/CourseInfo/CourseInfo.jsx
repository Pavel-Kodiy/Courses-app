import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockedCoursesList } from '../Courses/Courses';
import classes from './CourseInfo.module.css';

const CourseInfo = (props) => {
	const { duration } = props;
	const { courseId } = useParams();

	const course = useMemo(() => {
		return mockedCoursesList.find((course) => course.id === courseId);
	}, [courseId]);

	if (!course) {
		return <div>No courses</div>;
	}

	return (
		<div className={classes.wrapper}>
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
		</div>
	);
};

export default CourseInfo;
