import { createAction, createReducer } from "@reduxjs/toolkit";
import EPLTeams from '../../../database/teams/EPL/index';
import { setNextDate } from '../../utils/date';

const initialState = {
    selectedClub: EPLTeams[0],
    currentDate: '08.01.2022',
};

export const changeCurrentDate = createAction('CHANGE_CURRENT_DATE');

export default createReducer(initialState, {
    [`${changeCurrentDate}`]: state => {
        state.currentDate = setNextDate(state.currentDate);
    }
});