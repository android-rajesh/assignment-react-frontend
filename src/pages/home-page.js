import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/loader";
import Wrapper from "../components/wrapper";

export const HomePage = () => {
    const salaryState = useSelector((state) => state.salaryState);
    
    return (
        <>
            <Loader loading={salaryState.pending}>
                <Wrapper>

                </Wrapper>
            </Loader>
        </>
    );
};
