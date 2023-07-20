import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/filterSlice.js';

// К сожалению, mockapi не предоставляет данные об оставшихся объектах,
// когда мы устанавливаем параметры page=1&limit=3 например.
function Pagination({ currentPage }) {
	const dispatch = useDispatch();

	return (
		<div>
			<ReactPaginate
				className='pagination__wrapper'
				nextClassName='pagination__item'
				pageClassName='pagination__item'
				previousClassName='pagination__item'
				pageLinkClassName='pagination__link'
				previousLinkClassName='pagination__link'
				nextLinkClassName='pagination__link'
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				onPageChange={event => dispatch(setCurrentPage(event.selected + 1))}
				pageRangeDisplayed={0}
				pageCount={2}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}

export default Pagination;
