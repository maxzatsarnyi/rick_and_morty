import React, {useRef} from 'react';
import {ModalBackground, ModalWrapper, ModalImg, ModalContent, Person, CloseModalButton} from './CharacterModalElements'

const CharacterModal = ({modalInfo,showModal, setShowModal}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    };
    return (
        <>
            {showModal ? (
                <ModalBackground onClick={closeModal} ref={modalRef}>
                    <ModalWrapper >
                        <ModalImg src={`${modalInfo.image}`}/> 
                        <ModalContent>
                            <Person>name - {modalInfo.name}</Person>
                            <Person>gender - {modalInfo.gender}</Person>
                            <Person>species - {modalInfo.species}</Person>
                            <Person>origin - {modalInfo.origin}</Person>
                            <Person>location - {modalInfo.location}</Person>
                            <Person>status - {modalInfo.status}</Person>
                            <CloseModalButton onClick={() => setShowModal(prev => !prev)}/>
                        </ModalContent>
                    </ModalWrapper>
                </ModalBackground>
            ) : null}
            
        </>
    )
}

export default CharacterModal
