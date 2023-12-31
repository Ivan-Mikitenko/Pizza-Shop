import { RotatingLines } from 'react-loader-spinner';
function Loading() {
	return (
		<div className='container'>
			<RotatingLines
				strokeColor='grey'
				strokeWidth='5'
				animationDuration='0.75'
				width='96'
				visible={true}
			/>
		</div>
	);
}

export default Loading;
