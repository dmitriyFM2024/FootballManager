import { Tooltip } from '@mui/material';

export const InfoBlock = ({ name, data, popupLabel }) => {
	return (
		<Tooltip
			title={
				<div style={{ fontSize: 16 }}>
					<div style={{ marginBottom: 8 }}>{popupLabel}</div>
					{data.map((item, index) => {
						return <div key={index} style={{ fontSize: 14}}>{item}</div>;
					})}
				</div>
			}
		>
			<div className="info-container">{name}</div>
		</Tooltip>
	);
};
