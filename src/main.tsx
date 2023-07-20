import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error("Couldn't find element with id 'root'");
}

ReactDOM.createRoot(rootElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
