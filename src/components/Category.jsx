import { categoriesArr } from '../mocks/categotyArr.ts';
import { useDispatch } from 'react-redux';
import { setActiveFilter } from '../redux/slices/filterSlice.js';

function Category({ filterState }) {
	const dispatch = useDispatch();

	return (
		<div className='categories'>
			<ul>
				{categoriesArr.map((item, index) => (
					<li
						key={index}
						onClick={() => dispatch(setActiveFilter(index))}
						className={filterState === index ? 'active' : ''}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Category;
