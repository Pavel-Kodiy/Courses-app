import Header from '../Header/Header';
import classes from './CourseInfo.module.css';

const CourseInfo = (props) => {
	const { title, description, id, duration, creationDate, authors } = props;

	return (
		<div className={classes.wrapper}>
			<Header />
			<div className={classes.infoWrapper}>
				<div className={classes.backBtnWrapper}>
					<button className={classes.backBtn}> &lt; Back to courses</button>
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
		</div>
	);
};

export default CourseInfo;
