import { createSlice } from '@reduxjs/toolkit';
import EPLTeams from '../../../database/teams/EPL/index';
import { setNextDate } from '../../utils/date';

export const initialSlice = createSlice({
	name: 'initialSlice',
	initialState: {
		selectedClub: EPLTeams[0],
		currentDate: 'Jan 13, 2024',
	},
	reducers: {
		changeCurrentDate(state) {
			state.currentDate = setNextDate(state.currentDate);
		},
	},
});

export default initialSlice.reducer;
