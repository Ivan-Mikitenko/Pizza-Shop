import { useEffect, useState } from 'react';

function PopupCart({ pizzaItem }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (pizzaItem) {
			setVisible(true);
			const timer = setTimeout(() => {
				setVisible(false);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [pizzaItem]);

	const popupClass = visible ? 'popup-cart' : 'popup-cart hide';

	return (
		<div className={popupClass}>
			<h3 className='popup-cart__title'>Добавлено:</h3>
			<p className='popup-cart__subtitle'>Пицца: &quot;{pizzaItem}&quot;</p>
		</div>
	);
}

export default PopupCart;
