import { Tooltip } from '@mui/material';
import { getPercentageFromDecimal } from '../../../utils/common';
import { conditionColorGenerator } from '../../../utils/style-generators';

export const Diagram = ({ data }) => {
	return (
		<div className="diagram">
			{data?.map((item, index) => {
				return (
					<Tooltip key={index} title={item}>
						<div
							className="diagram__item"
							style={{
								background: conditionColorGenerator(item),
								height: getPercentageFromDecimal(item),
							}}
						></div>
					</Tooltip>
				);
			})}
		</div>
	);
};
