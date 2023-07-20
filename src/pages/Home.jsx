import qs from 'qs';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sortArr } from '../mocks/sortArr.ts';
import { setURLFilter } from '../redux/slices/filterSlice.js';
import Category from '../components/Category.jsx';
import Sort from '../components/Sort.jsx';
import PizzaLoader from '../components/PizzaLoader.jsx';
import PizzaBlock from '../components/PizzaBlock.jsx';
import Pagination from '../components/Pagination.jsx';
import { fetchPizzas } from '../redux/slices/pizzasSlice.js';
import CatchPizzas from '../components/CatchPizzas.jsx';
// TODO: сделать сортировку импортов
// TODO добавить пиццы + 5
// TODO: сделать изменение цены исходя из размера и добавляем их в корзину

const PAGE_LIMIT = 10;

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isFetch = useRef(false);
	const isMounted = useRef(false);

	const { indexSort, indexFilter, currentPage } = useSelector(state => state.filter);
	const { items, status } = useSelector(state => state.dataPizza);
	const { searchValue } = useSelector(state => state.filter);

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
			dispatch(setURLFilter(params));
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
				<Category filterState={indexFilter} />
				<Sort sortState={indexSort} />
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
