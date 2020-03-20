import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	const quotes = [
		"La sencillez es la máxima sofisticación.",
		"Siempre habrá más por construir de lo que realmente tenemos tiempo o recursos para ello.",
		"Pon al usuario en primer lugar. Inventa. Y sé paciente.",
		"Si para alimentar a tu equipo necesitas más de dos pizzas, es que tu equipo es demasiado grande.",
		"Decidir qué NO hacer es igual de importante que el decidir qué hacer.",
		"Tener demasiadas reglas entorpece la innovación."
	];

	const authors = [
		"Leonardo Da Vinci",
		"Jeff Patton",
		"Jeff Bezos, Amazon",
		"Jeff Bezos, Amazon",
		"Steve Jobs, Apple",
		"Sergey Brin, Google"
	];

	const randomPick = Math.floor((Math.random() * quotes.length));

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						{quotes[randomPick]}
					</div>
					<div class={style.author}>- {authors[randomPick]}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
