import React from "react";
import { Table } from "antd";

const TableCtrl = (props) => {
    const {
        tableClass,
        tablecolumn,
        tabledata,
        onTableChange,
        defaultPageSize,
        disablePagination,
        uniqueRowKey
    } = props;
    if (
        !(
            tableClass ||
            tablecolumn ||
            tabledata
        )
    ) {
        throw new Error(`Missing Parameters ${props}`);
    }

    return (
        <div className={tableClass}>
            <Table
                
                columns={tablecolumn}
                dataSource={tabledata}
                rowKey={uniqueRowKey}
                onChange={(e) => {
                    onTableChange(e);
                }}

                pagination={disablePagination ? false : { pageSize: defaultPageSize }}
            ></Table>
        </div>
    );
};

export default TableCtrl;
