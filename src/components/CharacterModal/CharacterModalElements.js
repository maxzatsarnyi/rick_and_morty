import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ModalBackground = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    cursor: pointer;

`;

export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    background-color: #F5F5F5;
    border-radius: 0px 10px 10px 0px;
`;

export const Person = styled.div`
  display: inline-block;
  /* text-align: left; */
  font-size: 30px;
  padding-left: 30px;
  padding-right: 5px;
  color: black;
  /* font-weight: 600; */
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;