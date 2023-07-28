import { Link } from 'react-router-dom';
import cartEmptyImg from '../../public/img/empty-cart.png';
function CartEmpty() {
	return (
		<div className='container container--cart'>
			<div className='cart cart--empty'>
				<h2>Корзина пустая</h2>
				<p>
					Вероятней всего, вы не заказывали ещё пиццу.
					<br />
					Для того, чтобы заказать пиццу, перейди на главную страницу.
				</p>
				<img className='cart__img' src={cartEmptyImg} alt='Корзина пустая' />
				<Link to='/' className='button button--black'>
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
}

export default CartEmpty;
