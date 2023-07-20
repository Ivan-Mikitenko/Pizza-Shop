import ContentLoader from 'react-content-loader';

const PizzaLoader = () => (
	<ContentLoader
		speed={2}
		width={280}
		height={466}
		viewBox='0 0 280 466'
		backgroundColor='#ffdf8c'
		foregroundColor='#ffcb8c'>
		<circle cx='130' cy='122' r='122' />
		<rect x='0' y='260' rx='10' ry='10' width='252' height='25' />
		<rect x='0' y='305' rx='10' ry='10' width='252' height='60' />
		<rect x='92' y='390' rx='5' ry='5' width='157' height='32' />
		<rect x='11' y='395' rx='5' ry='5' width='58' height='15' />
	</ContentLoader>
);

export default PizzaLoader;
