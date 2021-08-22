import { MessageType } from '../../shared/enums/message-type-enum';
import { SET_MESSAGE_STATE, CLEAR_MESSAGE_STATE } from './actionTypes';

export const setMessageState = (message) => ({
	type: SET_MESSAGE_STATE,
	payload: message
});


export function setErrorMessage(message) {
	return {
		type: SET_MESSAGE_STATE,
		payload: {
			messageType: MessageType.Error,
			message: message,
		}
	};
}

export function setSuccessMessage(message) {
	return {
		type: SET_MESSAGE_STATE,
		payload: {
			messageType: MessageType.Success,
			message: message
		}
	};
}

export function setWarningMessage(message) {
	return {
		type: SET_MESSAGE_STATE,
		payload: {
			messageType: MessageType.Warning,
			message: message
		}
	};
}

export function setInformation(message) {
	return {
		type: SET_MESSAGE_STATE,
		payload: {
			messageType: MessageType.Information,
			message: message
		}
	};
}

export const clearMessageState = () => ({
	type: CLEAR_MESSAGE_STATE
});
