import LogoImg from './logo192.png';

const Logo = () => {
	return (
		<div>
			<img
				style={{ width: '50px', height: '50px' }}
				src={LogoImg}
				alt='Logo'
			></img>
		</div>
	);
};

export default Logo;
