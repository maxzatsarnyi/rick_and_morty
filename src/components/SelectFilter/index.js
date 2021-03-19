import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectContainer = styled.div`
    width: 30%;
    /* text-align: center; */
`;

const Label = styled.label`
    padding-left: 10px;
`;

const SelectFilter = ({text, options, onChange }) => {
    return (
        <>
            <SelectContainer>
                <Label>Choose {text}</Label>
                <div style={{marginTop: '5px'}}></div>
                <Select options={options} isClearable onChange={onChange} />
            </SelectContainer>
        </>
    )
}

export default SelectFilter;