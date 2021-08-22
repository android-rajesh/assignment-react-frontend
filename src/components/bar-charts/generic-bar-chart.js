import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';
const BarChartsEnums = {
		XAxisStrokeColor: '#C4C4C4',
		YAxisStrokeColor: '#C4C4C4',
		AxisFontColor: '#000000',
		PreviousYearColor: '#098BCB',
		CurrentYearColor: '#00D7B9'
	};
function GenericBarChart(props) {	
    const data = props.data;
	return (
		data && (
			<BarChart barGap={30} width={250} height={150} data={data} margin={{ left: -30 }}>
				<XAxis
					stroke={BarChartsEnums.XAxisStrokeColor}
					style={{ fill: BarChartsEnums.AxisFontColor, fontSize: 11 }}
					dataKey="name"
					ticks={0}
					tick={false}
					tickCount={0}
				/>
				<YAxis
					stroke={BarChartsEnums.YAxisStrokeColor}
					style={{ fill: BarChartsEnums.AxisFontColor, fontSize: 11 }}
					tickLine={false}
					ticks={0}
					tickCount={3}
				/>
				<Bar dataKey="salary" fill={BarChartsEnums.PreviousYearColor}>
					<LabelList
						formatter={(val) => `${val}`}
						style={{ fontSize: 10, fill: BarChartsEnums.AxisFontColor }}
						dataKey="salary"
						position="center"
					></LabelList>
				</Bar>
				<Bar dataKey="salary" fill={BarChartsEnums.CurrentYearColor}>
					<LabelList
						formatter={(val) => `${val}`}
						style={{ fontSize: 10, fill: BarChartsEnums.AxisFontColor }}
						dataKey="salary"
						position="center"
					></LabelList>
				</Bar>
			</BarChart>
		)
	);
}

export default GenericBarChart;
