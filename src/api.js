import axios from 'axios';

const http = axios.create({
  baseURL: 'https://pokeapi.co/api/',
});

export const fetchPokemonByGeneration = async (gen) => {
	try {
		const { data } = await http.get(`/v2/generation/${gen}`);

		const species = data.pokemon_species.map((pe) => ({
			id: pe.url.split('/pokemon-species/').pop().split('/')[0],
			name: pe.name
		})).sort((a, b) => {
			return a.id - b.id;
		});

		return species;
	} catch (e) {
		console.error(e);
	}
};

const api = {
	fetchPokemonByGeneration
};

export default api;
