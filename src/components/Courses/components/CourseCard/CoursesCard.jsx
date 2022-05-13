import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../comon/Button/Button';
import classes from './CoursesCard.module.css';

const CoursesCard = (props) => {
	const { id, title, description, authors, duration, creationDate } = props;

	const [showCourse, setShowCourse] = useState(false);
	const navigate = useNavigate();

	const goToRegistration = useEffect(() => {
		if (showCourse) {
			navigate(`/courses/:${id}`);
		}
	}, [showCourse, setShowCourse, navigate]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.text}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className={classes.info}>
				<div className={classes.authors}>
					<div style={{ display: 'flex' }}>
						<strong style={{ display: 'block' }}>Authors:&nbsp;</strong>
						{authors}
					</div>
				</div>
				<div className={classes.duration}>
					<p>
						<strong>Duration:&nbsp;</strong>
						{duration}
					</p>
				</div>
				<div className={classes.creationDate}>
					<p>
						<strong> Created:&nbsp;</strong>
						{creationDate}
					</p>
				</div>
				<div className={classes.btnWrapp}>
					<Button
						text={'Show course'}
						onClick={() => {
							setShowCourse(true);
							goToRegistration();
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
