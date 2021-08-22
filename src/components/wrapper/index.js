import React from 'react';
import Header from '../header';

export function Wrapper({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
export default Wrapper;