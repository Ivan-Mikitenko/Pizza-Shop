import { IoIosClose } from 'react-icons/io';
import { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filter/filterSlice';

function Search() {
	const [value, setValue] = useState('');
	const inputEl = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const filterDebounce = useCallback(
		debounce((e: string) => {
			dispatch(setSearchValue(e));
		}, 250),
		[]
	);

	return (
		<div className='search__form'>
			<div className='search__form'>
				<input
					ref={inputEl}
					onChange={e => {
						setValue(e.target.value);
						filterDebounce(e.target.value);
					}}
					value={value}
					className='search__input'
					placeholder='Поиск пиццы...'
					type='text'
				/>
				<div
					onClick={() => {
						setValue('');
						dispatch(setSearchValue(''));
						inputEl.current?.focus();
					}}
					className='search__btn'>
					{value && <IoIosClose className='search__btn-icon-search' color='#7b7b7b' size={40} />}
				</div>
			</div>
		</div>
	);
}

export default Search;
