import { Spin } from 'antd/lib';
import React from 'react';

function Loader({ loading = false, children, tip = 'Loading...' }) {
	return loading ? <Spin tip={tip}>{children}</Spin> : children;
}
export default Loader;
