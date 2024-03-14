import { useState, useEffect } from "react"

const CAT_ENDPOINT_RANDOM_WORD = 'https://catfact.ninja/fact'
export function Home() {
	const [fact, setFact] = useState("Cargando...")
	const [imageUrl, setImageUrl] = useState('')
	useEffect(() => {
		fetch(CAT_ENDPOINT_RANDOM_WORD)
			.then(res => res.json())
			.then(data => {
				const { fact } = data
				setFact(fact)

				const threeFirstWords = fact.split(' ', 3).toString().replaceAll(',', ' ')
				fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
					.then(res => res)
					.then(response => {
						const { url } = response
						console.log(response)
						setImageUrl(url)
					})
			})

	}, [])

	return (
		<main>
			<h1>App de gatitos</h1>
			{fact && <p>{fact}</p>}
			{imageUrl && <img src={`${imageUrl}`} alt={`image extracted using this words: ${fact}`}></img>}
		</main>
	)
}
