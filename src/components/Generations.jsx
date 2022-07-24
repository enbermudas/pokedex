import { Button, Show, Stack } from '@chakra-ui/react';

const Generations = ({
	handleFetch,
	gen
}) => {
	return (
		<Stack
			direction="row"
			align="center"
			justify="center"
			spacing="4"
		>
			{
				Array.from(Array(8).keys()).map((n) => {
					return (
						<Button
							onClick={() => handleFetch(n + 1)}
							disabled={gen === n + 1}
						>
							<Show above="md">Gen.</Show> { n + 1 }
						</Button>
					)
				})
			}
		</Stack>
	);
};

export default Generations;
