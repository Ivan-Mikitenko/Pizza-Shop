import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';
function NotFoundPage() {
	return (
		<div className={styles.notFound}>
			<div>
				<h1 className={styles.notFound__title}>Мы не нашли эту страницу</h1>
				<p className={styles.notFound__description}>Но знаем, где найти много всего вкусного</p>
				<Link to='/' className={styles.notFound__button}>
					Back to menu
				</Link>
			</div>
			<div className={styles.notFound__wrapperImg}></div>
		</div>
	);
}

export default NotFoundPage;
