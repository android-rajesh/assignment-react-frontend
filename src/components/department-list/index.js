import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loadDepartmentList } from "../../redux/actions/departmentActions";
import TableCtrl from "../table-ctrl";

export const DepartmentList = () => {
    const { current } = useSelector((state) => state.departmentState);
    const dispatch = useDispatch();

	useEffect(() => {
			dispatch(loadDepartmentList());		
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
