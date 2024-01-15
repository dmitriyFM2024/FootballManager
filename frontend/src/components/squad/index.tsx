import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Flag from 'react-world-flags';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import { useSelector } from 'react-redux';
import { squadService } from './utils';
import { Paper, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { InfoBlock } from './componenets/info-block';
import { Diagram } from './componenets/diagram';
import { PlayerRating } from './componenets/rating';
import { getCode } from 'country-list';

import './style/index.scss';
import { ConditionBlock } from './componenets/condition';

const Squad = () => {
	const {
		selectedClub: { squad },
	} = useSelector((state) => state.mainReducer);

	const [tableContainerHeight, setTableContainerHeight] = useState(0);
	const [dataSquad, setDataSquad] = useState(squad);
	const [sortDirection, setSortDirection] = useState(true);

	useEffect(() => {
		setTableContainerHeight(
			window.innerHeight - document.querySelector('.js_topbar')?.offsetHeight,
		);
	}, []);

	return (
		<div className="squad">
			<Paper sx={{ width: '100%', overflow: 'hidden' }}>
				<TableContainer className="squad__table-container" sx={{ maxHeight: tableContainerHeight }}>
					<Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{squadService.tableHead.map((item, index) => {
									return (
										<TableCell
											onClick={() =>
												item.isSorted &&
												squadService.sortHandler(item, {
													setDataSquad,
													dataSquad,
													sortDirection,
													setSortDirection,
												})
											}
											key={index}
											className="squad__table-head-item"
										>
											<div style={{ display: 'flex', alignItems: 'center' }}>
												{item.isSorted && <SwapVertIcon />}
												<Tooltip title={item.fullName}>{item.name}</Tooltip>
											</div>
										</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{dataSquad.map((item, index) => {
								return (
									<TableRow key={index} className="squad__table-body-item">
										<TableCell>{item?.selectedPosition}</TableCell>
										<TableCell>
											{!!item?.wantedBy?.length && (
												<InfoBlock name="Wnt" data={item?.wantedBy} popupLabel="Wanted by:" />
											)}
										</TableCell>
										<TableCell className="df aic">
											<Flag code={getCode(item.nationality) || 'GB_ENG'} className="squad__flag" />
											{item?.name}
											<span className="ml02">({item?.age})</span>
										</TableCell>
										<TableCell>{item?.position}</TableCell>
										<TableCell>
											<ConditionBlock quality={item?.conditions} styles={{ borderRadius: 4 }} />
										</TableCell>
										<TableCell>
											<ConditionBlock
												quality={item?.readyConditions}
												styles={{ borderRadius: 14 }}
											/>
										</TableCell>
										<TableCell>
											<ConditionBlock
												quality={item?.playingTimeHappiness}
												styles={{ borderRadius: 24 }}
											/>
										</TableCell>
										<TableCell>
											<Diagram data={item?.lastFiveGames} />
										</TableCell>
										<TableCell>{item?.gamesPerSeasonMain}</TableCell>
										<TableCell>{item?.seasonGoals}</TableCell>
										<TableCell>{item?.seasonAssists}</TableCell>
										<TableCell>
											{!!item?.seasonRating?.length && (
												<PlayerRating seasonRating={item?.seasonRating} />
											)}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default Squad;
