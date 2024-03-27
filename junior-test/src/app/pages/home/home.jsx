import { useRandomFact } from "../../hooks/useRandomFact";
import { useCatImage } from "../../hooks/useCatImage";

export function Home() {
	const { fact, refreshFact } = useRandomFact();
	const { imageUrl } = useCatImage({ fact });

	const handleClick = async () => {
		refreshFact();
	} 

	return (
		<main>
			<h1>App de gatitos</h1>
			<button onClick={handleClick}>Otro dato</button>
			{fact && <p>{fact}</p>}
			{imageUrl && <img src={`${imageUrl}`} alt={`image extracted using this words: ${fact}`}></img>}
		</main>
	)
}
