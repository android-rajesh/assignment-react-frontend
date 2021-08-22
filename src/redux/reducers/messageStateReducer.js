import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messageStateReducer(state = initialState.messageState, action) {
	const { type } = action;

	switch (type) {
		case types.SET_MESSAGE_STATE:
			return {
				...state,
				current: action.payload,
				hasMessage: true
			};
		case types.CLEAR_MESSAGE_STATE:
			return { ...initialState.messageState };
		default:
			return state;
	}
}
