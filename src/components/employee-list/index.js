import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loadEmployeeList } from "../../redux/actions/employeeActions";
import TableCtrl from "../table-ctrl";

export const EmployeeList = () => {
    const { current } = useSelector((state) => state.employeeState);
    const dispatch = useDispatch();

	useEffect(() => {
			dispatch(loadEmployeeList());		
	}, []);
    
    const tableColumns =  [
    {
      title: "Id",
      dataIndex: "id",
      showSorterTooltip: false,
    },
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: false,
    },
    {
      title: "Department Id",
      dataIndex: "departmentId",
      showSorterTooltip: false,
    }
]


	return (
			
			 
					 <TableCtrl
                        {...{

                            tableClass: "table",
                            tablecolumn: tableColumns,
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
