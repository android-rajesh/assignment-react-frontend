import React from "react";
import { useSelector } from "react-redux";
import { DepartmentList } from "../components/department-list";
import { EmployeeList } from "../components/employee-list";
import Loader from "../components/loader";
import { SalaryList } from "../components/salary-list";
import Wrapper from "../components/wrapper";

export const HomePage = () => {

    return (
        <>
             
                <Wrapper>
                Hello world.
                <DepartmentList />
                <EmployeeList />
                <SalaryList />
                </Wrapper>
             
        </>
    );
};
