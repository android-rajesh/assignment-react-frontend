import { useEffect } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MessageType } from '../../shared/enums/message-type-enum';
import { clearMessageState } from '../../redux/actions/messageActions';

function ApiStatusBoxCtrl() {
	const messageState = useSelector((state) => state.messageState);
	const dispatch = useDispatch();

	const showMessage = (messageState, messageRenderer) => {
		if (messageState && messageState.current) {		
			if (messageState.current.message) {
				messageRenderer(messageState.current.message);
			}
		}
	};

	useEffect(() => {
		if (messageState.hasMessage === true && messageState.current && messageState.current.messageType) {
			switch (messageState.current.messageType) {
				case MessageType.Information:
					showMessage(messageState, message.info);
					break;
				case MessageType.Error:
					showMessage(messageState, message.error);
					break;
				case MessageType.Success:
				default:
					showMessage(messageState, message.success);
					break;

			}
			dispatch(clearMessageState());
		}
	}, [messageState.hasMessage])

	return (
		<></>
	);
}

export default ApiStatusBoxCtrl;
