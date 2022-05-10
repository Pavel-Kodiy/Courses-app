import Button from '../../../../comon/Button/Button';
import classses from './CoursesCard.module.css';

const CoursesCard = (props) => {
	return (
		<div className={classses.wrapper}>
			<div className={classses.text}>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</div>
			<div className={classses.info}>
				<div className={classses.authors}>
					<div style={{ display: 'flex' }}>
						<strong style={{ display: 'block' }}>Authors:&nbsp;</strong>
						{props.authors}
					</div>
				</div>
				<div className={classses.duration}>
					<p>
						<strong>Duration:&nbsp;</strong>
						{props.duration}
					</p>
				</div>
				<div className={classses.creationDate}>
					<p>
						<strong> Created:&nbsp;</strong>
						{props.creationDate}
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
