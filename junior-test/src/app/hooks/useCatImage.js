import { useState, useEffect } from 'react';
export function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		if(!fact) return;
		const threeFirstWords = fact.split(' ', 3).toString().replaceAll(',', ' ')
		fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
			.then(res => res)
			.then(response => {
				const { url } = response
				setImageUrl(url)
			})
			.catch(err => console.error(err));
	}, [fact]);
	return {
		imageUrl: `${imageUrl}`
	}
}