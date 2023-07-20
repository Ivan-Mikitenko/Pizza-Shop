import { sortArr } from '../mocks/sortArr.ts';
import { useState } from 'react';

function Popup() {
	const [itemSort, setItemSort] = useState(1);

	return (
		<div className='sort__popup'>
			<ul>
				{sortArr.map(item => (
					<li
						onClick={() => setItemSort(item.id)}
						className={itemSort === item.id ? 'active' : ''}
						key={item.id}>
						{item.sortBy}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Popup;
