import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/slices/cart/cartSlice';
import { Link } from 'react-router-dom';
import { DataPizzaType } from '../types/dataPizza';
import { RootState } from '../redux/store';

function PizzaBlock({ imageUrl, title, sizes, price, types, id }: DataPizzaType) {
	const dispatch = useDispatch();
	const [activeType, setActiveType] = useState(0);
	const [activeSize, setActiveSize] = useState(0);

	const cartItem = useSelector((state: RootState) => state.cart.items.find(obj => obj.id === id));

	const addedQuantity = cartItem ? cartItem.quantity : 0;

	const onClickAdd = useCallback(() => {
		dispatch(
			addProduct({
				id,
				imageUrl,
				title,
				sizes: sizes[activeSize],
				type: activeType,
				price: price[activeSize],
				quantity: 0
			})
		);
	}, [dispatch, imageUrl, title, sizes, activeSize, activeType, price]);

	return (
		<div className='pizza-block'>
			<Link to={`/pizza/${id}`}>
				<img className='pizza-block__image' src={imageUrl} alt={title} />
				<h4 className='pizza-block__title'>{title}</h4>
			</Link>
			<div className='pizza-block__selector'>
				<ul>
					{types.map((type, index) => (
						<li
							onClick={() => setActiveType(index)}
							className={activeType === index ? 'active' : ''}
							key={index}>
							{type === 0 ? 'тонкое' : 'традиционное'}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((item, index) => (
						<li
							onClick={() => setActiveSize(index)}
							className={activeSize === index ? 'active' : ''}
							key={index}>
							{item} см
						</li>
					))}
				</ul>
			</div>
			<div className='pizza-block__bottom'>
				<div className='pizza-block__price'>{price[activeSize]} ₽</div>
				<button onClick={onClickAdd} className='button button--outline button--add'>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='white'
						/>
					</svg>
					<span>Добавить</span>
					{addedQuantity > 0 && <i>{addedQuantity}</i>}
				</button>
			</div>
		</div>
	);
}

export default PizzaBlock;
