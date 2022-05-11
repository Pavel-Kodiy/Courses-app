import Button from '../../../../comon/Button/Button';
import classses from './CoursesCard.module.css';

const CoursesCard = (props) => {
	const { title, description, authors, duration, creationDate } = props;

	return (
		<div className={classses.wrapper}>
			<div className={classses.text}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className={classses.info}>
				<div className={classses.authors}>
					<div style={{ display: 'flex' }}>
						<strong style={{ display: 'block' }}>Authors:&nbsp;</strong>
						{authors}
					</div>
				</div>
				<div className={classses.duration}>
					<p>
						<strong>Duration:&nbsp;</strong>
						{duration}
					</p>
				</div>
				<div className={classses.creationDate}>
					<p>
						<strong> Created:&nbsp;</strong>
						{creationDate}
					</p>
				</div>
				<div className={classses.btnWrapp}>
					<Button text={'Show course'} />
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
