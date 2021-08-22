import React from "react";
import { useSelector } from "react-redux";
import GenericBarChart from "../components/bar-charts/generic-bar-chart";
import { DepartmentList } from "../components/department-list";
import Wrapper from "../components/wrapper";

export const ChartPage = () => {
    const { current } = useSelector((state) => state.employeeState);

    return (
        <>
             
                <Wrapper>
                
                <p>
                    Hello world.
                </p>
                <h2>Department</h2>
                <DepartmentList />
                 
                <GenericBarChart
				{...{
					title: 'Bar chart',
					classes: 'mean-chart',
					data: current.model
				}}
			/>
                </Wrapper>
             
        </>
    );
};
