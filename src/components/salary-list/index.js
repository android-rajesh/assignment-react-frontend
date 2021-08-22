import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loadSalaryList } from "../../redux/actions/salaryActions";
import TableCtrl from "../table-ctrl";

export const SalaryList = () => {
    const { current } = useSelector((state) => state.salaryState);
    const dispatch = useDispatch();

	useEffect(() => {
			dispatch(loadSalaryList());		
	}, []);
    
    const salaryTableColumns =  [
    {
      title: "Id",
      dataIndex: "id",
      showSorterTooltip: false,
    },
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      showSorterTooltip: false,
    },
    {
      title: "Year",
      dataIndex: "year",
      showSorterTooltip: false,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      showSorterTooltip: false,
    },
]


	return (
			
			 
					 <TableCtrl
                        {...{

                            tableClass: "salarytable",
                            tablecolumn: salaryTableColumns,
                            uniqueRowKey: "id",
                            tabledata: current.model,
                            onTableChange: () => { },
                            onInputChange: () => {

                            },
                            defaultPageSize: 100,
                        }}
                    />
				 
			
		);
};
