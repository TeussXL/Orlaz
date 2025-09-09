import styles from './Banner.module.css';

export default function Banner() {
	return (
		<section className={styles.banner}>
			<div className={styles.overlay} />
			<div className={styles.content}>
				<h1>Explore as Belezas do Litoral Norte</h1>
				<p>Descubra praias paradisíacas, gastronomia incrível e muito mais nas cidades mais encantadoras do litoral paulista</p>
			</div>
		</section>
	);
}
