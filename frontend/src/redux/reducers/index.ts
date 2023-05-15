import { createSlice } from '@reduxjs/toolkit';
import EPLTeams from '../../../database/teams/EPL/index';
import { setNextDate } from '../../utils/date';

export const initialSlice = createSlice({
	name: 'initialSlice',
	initialState: {
		selectedClub: EPLTeams[0],
		currentDate: '08.01.2022',
	},
	reducers: {
		changeCurrentDate(state) {
			state.currentDate = setNextDate(state.currentDate);
		},
	},
});

export default initialSlice.reducer;
