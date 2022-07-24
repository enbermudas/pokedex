import { Center, Image, Text } from '@chakra-ui/react';
import './Pokemon.scss';

const Pokemon = ({ info }) => {
	const { id, name } = info;

	return (
		<div className="pokemon">
			<Image src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`} alt={name} m="auto" />

			<Center>
				<Text fontSize="sm" mt="4" fontWeight="bold">{id} - {name.toUpperCase()}</Text>
			</Center>
		</div>
	)
};

export default Pokemon;
