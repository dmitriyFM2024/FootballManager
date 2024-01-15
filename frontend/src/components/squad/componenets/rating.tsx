import { conditionColorGenerator } from '../../../utils/style-generators';
import { formTotalRate } from '../../../utils/common';

export const PlayerRating = ({ seasonRating }) => {
	const totalRate: number = formTotalRate(seasonRating);

	return (
		<div style={{ background: conditionColorGenerator(totalRate) }} className="player-rating">
			{totalRate}
		</div>
	);
};
