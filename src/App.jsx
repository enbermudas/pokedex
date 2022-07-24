import { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import Generations from './components/Generations';
import List from './components/List';
import api from './api';
import './App.scss';

const App = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [gen, setGen] = useState(0);
	const [pokemon, setPokemon] = useState([]);

	const handleFetch = async (n) => {
		setIsFetching(true);
		const newPokemon = await api.fetchPokemonByGeneration(n);
		setGen(n);
		setPokemon(newPokemon);
	};

	useEffect(() => {
		setGen(1);
		handleFetch(1);
	}, []);

	useEffect(() => {
		setIsFetching(!pokemon.length);
	}, [pokemon]);

  return (
    <div className="app">
      <Container maxW="100vw" my="6" p="6">
				<Generations handleFetch={handleFetch} gen={gen} />

				<List pokemon={pokemon} />
			</Container>
    </div>
  );
}

export default App;
