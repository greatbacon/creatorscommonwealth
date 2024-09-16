import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { games } from './gameData';

export const load: PageLoad = ({ params }) => {
	const game = games.find((g) => g.name == params.game)

	if (game) {
		return game
	}

	error(404, 'Game not found');
};