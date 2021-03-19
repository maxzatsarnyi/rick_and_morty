import React from 'react'
import styled from 'styled-components';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderContainer = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content:center;
`;

const LoaderComponent = ({isLoading}) => {
    return (
        <>
            <LoaderContainer>
                <Loader visible ={isLoading} type="TailSpin" color="#00BFFF" height={60} width={60} />
            </LoaderContainer>
        </>
    )
}

export default LoaderComponent;
