import { Grid, GridItem } from '@chakra-ui/react';
import Pokemon from './Pokemon';

const List = ({
	pokemon
}) => {
	return (
		<Grid
			templateColumns={{
				sm: 'repeat(2, 1fr)',
				md: 'repeat(3, 1fr)',
				lg: 'repeat(4, 1fr)',
				xl: 'repeat(6, 1fr)'
			}}
			templateRows="262.5px"
			gap="14"
			mt="14"
		>
			{
				!!pokemon.length && pokemon.map((pk) => {
					return (
						<GridItem w="100%" h="262.5px">
							<Pokemon key={pk.id} info={pk} />
						</GridItem>
					)
				})
			}
		</Grid>
	);
};

export default List;
