function CatchPizzas({ fetchPizzas }) {
	return (
		<div className='container container--cart'>
			<div className='cart cart--empty'>
				<h2>Не удалось загрузить пиццы 😕</h2>
				<p>Вероятней всего, проблемы с сервером</p>
				<img
					className='cart__img--'
					src='https://dodopizzadev-a.akamaihd.net/site-static-pages-dev/errors/pizza-box-with-shadow-1.0.jpg'
					alt='Корзина пустая'
				/>
				<button onClick={() => fetchPizzas()} className='button button--black'>
					<span>Попробовать ещё раз</span>
				</button>
			</div>
		</div>
	);
}

export default CatchPizzas;
