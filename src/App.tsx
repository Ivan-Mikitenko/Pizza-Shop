import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFoundPages from './pages/NotFoundPage/NotFoundPage.jsx';

import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import PizzaInfo from './components/PizzaInfo.jsx';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='cart' element={<Cart />} />
						<Route path='pizza/:id' element={<PizzaInfo />} />
					</Route>
					<Route path='*' element={<NotFoundPages />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
