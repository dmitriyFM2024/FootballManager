import { conditionColorGenerator, conditionIconGenerator } from '../../../utils/style-generators';

export const ConditionBlock = ({ quality, styles }) => {
	return (
		<div className="player-conditions" style={{ background: conditionColorGenerator(quality), ...styles }}>
			{conditionIconGenerator(quality)}
		</div>
	);
};
