import { categoriesArr } from '../mocks/categotyArr';
import { useDispatch } from 'react-redux';
import { setActiveFilter } from '../redux/slices/filter/filterSlice';
import React from 'react';

type CategoryType = {
	filterState: number;
};
function Category({ filterState }: CategoryType) {
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

const CategoryMemo = React.memo(Category);
export default CategoryMemo;
