import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartType } from '../types/cartType';

function PizzaDetails() {
	const [pizzaData, setPizzaData] = useState<CartType | null>(null);
	const [pizzaDataError, setPizzaDataError] = useState<Error | unknown>();
	const navigate = useNavigate();
	const { id } = useParams();

	const redirectToHomeAfterDelay = () => {
		setTimeout(() => navigate('/'), 500);
	};

	useEffect(() => {
		const fetchPizzaData = async () => {
			try {
				const { data } = await axios.get(`https://64a55a0500c3559aa9bf884c.mockapi.io/items/${id}`);
				setPizzaData(data);
			} catch (err) {
				setPizzaDataError(err);
				redirectToHomeAfterDelay();
			}
		};
		fetchPizzaData();
	}, [id]);

	if (!pizzaData) {
		return (
			<div className='container'>
				<h1>{pizzaDataError ? 'Ошибка загрузки!' : 'Загрузка ...'}</h1>
			</div>
		);
	}

	if (!pizzaData) {
		return (
			<div className='container'>
				<h1>{pizzaDataError ? 'Ошибка загрузки!' : 'Загрузка ...'}</h1>
			</div>
		);
	}

	return (
		<div className='container'>
			<div className='pizza-block__info'>
				<div>
					<div>
						<img src={pizzaData.imageUrl} alt={pizzaData.title} />
					</div>
					<div>
						<h1 className='pizza-block__info-title'>{pizzaData.title}</h1>
					</div>
				</div>
				<div>
					<p className='pizza-block__info-subtitle'>Какое то описание</p>
					<p className='pizza-block__info-subtitle'>
						Тут рассказ о крутой пицце &quot;{pizzaData.title}&quot;
					</p>
					<p className='pizza-block__info-history'>
						Классическое тесто для итальянской пиццы делается из специальной муки твёрдых сортов
						пшеницы, с высоким содержанием белка, количеством не менее 14-15 %, в Италии известной
						как тип «два нуля» (Farina Di Grano Tenero, tipo 00), натуральных дрожжей (закваски),
						соли, воды и оливкового масла. Тесто замешивается вручную и отправляется на двухчасовой
						отдых, после этого его делят на шарики и отправляют на длительный отдых — около 8 часов.
						Из тестового шарика руками (вначале пальцами рук, а затем ладонями) раcскатывается и
						растягивается (раскрывается) тестовая основа круглой формы. Толщина классического теста
						пиццы — около 3-4 миллиметров, диаметр тестовой основы — 31-32 сантиметра. Тесто
						покрывается томатным соусом либо его аналогами — например, белым (сливочным) соусом.
						После этого возможно добавление практически любых начинок. Непременным атрибутом почти
						любой пиццы является сыр. Как правило это моцарелла, но также могут быть и другие
						итальянские сыры: пекорино романо, пармезан и другие.s
					</p>
				</div>
			</div>
		</div>
	);
}

export default PizzaDetails;
