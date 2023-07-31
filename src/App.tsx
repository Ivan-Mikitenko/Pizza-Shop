import Home from './pages/Home';
import NotFoundPages from './pages/NotFoundPage/NotFoundPage';

import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loading, Header } from './components/index';

const Cart = lazy(() => import('./pages/Cart'));
const PizzaInfo = lazy(() => import('./components/PizzaInfo'));
function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route
							path='cart'
							element={
								<Suspense fallback={<Loading />}>
									<Cart />
								</Suspense>
							}
						/>
						<Route
							path='pizza/:id'
							element={
								<Suspense fallback={<Loading />}>
									<PizzaInfo />
								</Suspense>
							}
						/>
					</Route>
					<Route path='*' element={<NotFoundPages />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
