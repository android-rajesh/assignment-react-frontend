import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/loader";
import { SalaryList } from "../components/salary-list";
import Wrapper from "../components/wrapper";

export const HomePage = () => {
    const salaryState = useSelector((state) => state.salaryState);
    
    return (
        <>
             
                <Wrapper>
                Hello world.
                <SalaryList />
                </Wrapper>
             
        </>
    );
};
