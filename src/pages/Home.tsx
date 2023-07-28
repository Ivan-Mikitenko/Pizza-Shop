import qs from 'qs';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sortArr } from '../mocks/sortArr';
import { setURLFilter } from '../redux/slices/filter/filterSlice.js';
import PizzaLoader from '../components/PizzaLoader.js';
import PizzaBlock from '../components/PizzaBlock.js';
import Pagination from '../components/Pagination.js';
import { fetchPizzas } from '../redux/slices/pizza/pizzasSlice.js';
import CatchPizzas from '../components/CatchPizzas.js';
import { RootState, useAppDispatch } from '../redux/store';
import CategoryMemo from '../components/Category.js';
import SortMemo from '../components/Sort.js';
import { FilterSlice } from '../redux/slices/filter/types';

const PAGE_LIMIT = 10;

function Home() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isFetch = useRef(false);
	const isMounted = useRef(false);

	const { indexSort, indexFilter, currentPage } = useSelector((state: RootState) => state.filter);
	const { items, status } = useSelector((state: RootState) => state.dataPizza);
	const { searchValue } = useSelector((state: RootState) => state.filter);

	const pizzaControl = async () => {
		const categoryItem = indexFilter > 0 ? `category=${indexFilter}` : '';
		const sortItem =
			indexSort > 0
				? `&sortBy=${sortArr[indexSort].sortProperty}&order=${sortArr[indexSort].order}`
				: '';

		dispatch(
			fetchPizzas({
				currentPage,
				PAGE_LIMIT,
				categoryItem,
				sortItem
			})
		);
	};

	// TODO: вынести все useEffect в отдельные компоненты
	// считываем из URL
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const filterParams: FilterSlice = {
				searchValue: '',
				indexFilter: Number(params.indexFilter),
				indexSort: Number(params.indexSort),
				currentPage: Number(params.currentPage)
			};

			dispatch(setURLFilter(filterParams));
			isFetch.current = true;
		}
	}, []);

	// запрос
	useEffect(() => {
		// if (!isFetch.current) {
		// 	fetchPizzas();
		// }

		pizzaControl();
		isFetch.current = false;
	}, [indexSort, indexFilter, currentPage]);

	// записываем в URL
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				indexSort: indexSort,
				indexFilter: indexFilter,
				currentPage: currentPage
			});

			navigate(`?${queryString}`);
		}

		isMounted.current = true;
	}, [indexSort, indexFilter, currentPage]);

	return (
		<div className='container'>
			<div className='content__top'>
				<CategoryMemo filterState={indexFilter} />
				<SortMemo sortState={indexSort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{status === 'error' ? (
					<CatchPizzas fetchPizzas={pizzaControl} />
				) : status === 'loading' ? (
					[...new Array(4)].map((_, index) => <PizzaLoader key={index} />)
				) : (
					items
						.filter(arr => arr.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
						.map(item => <PizzaBlock key={item.id} {...item} />)
				)}
			</div>
			<Pagination currentPage={currentPage} />
		</div>
	);
}

export default Home;
