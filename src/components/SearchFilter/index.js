import React from 'react';
import styled from 'styled-components';
import {DebounceInput} from 'react-debounce-input';

const SearchContainer = styled.div`
    /* width: 400px; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 30%;
`;

const InputWrapper = styled.div`
    
`;

const Label = styled.label`
    padding-left: 10px;
`;

const DebounceInputt = styled(DebounceInput)`
    /* padding-left: 10px; */
    width: 100%;
    padding: 9px 0 9px 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 0.5px solid silver;
    outline: none;
`;

const SearchFilter = ({value, onChange }) => {
    return (
        <>
            <SearchContainer>
                <Label>Choose name</Label>
                <div style={{marginTop: '5px'}}></div>
                <InputWrapper>
                    <DebounceInputt
                    debounceTimeout={300}
                    value={value} onChange={onChange} placeholder={'Search by name'}/>
                </InputWrapper>
            </SearchContainer>
        </>
    )
}

export default SearchFilter;