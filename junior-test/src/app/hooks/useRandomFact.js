import { useState, useEffect } from "react";
import { getRandomFact } from "../../services/facts";

export function useRandomFact() {
	const [fact, setFact] = useState("Cargando...");
	
	const refreshFact = async () => {
		const newFact = await getRandomFact();
		setFact(newFact);
	}
	useEffect(() => {
		refreshFact();
	}, []);
	return {
		fact,
		refreshFact
	}
}
