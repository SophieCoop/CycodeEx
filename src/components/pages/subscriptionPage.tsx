import React, { useState, useMemo, useEffect } from 'react';
import Modal from '../elements/modal';
import { StyledButton } from '../elements/styledButton';
import Header from '../elements/header';
import { setDocumentTitle } from '../utils/documentUtils';

import '../../assets/styles/mainPage.css';

const SubscriptionPage = () => {

    const [modalShow, setModalShow] = useState(false);

    useEffect(()=> {
        setDocumentTitle('Subscription');
    }, []);

    const showModal = () => {
        setModalShow(true);
    };

    const hideModal = () => {
        setModalShow(false);
    };

    const iFrameUrl = useMemo(() => {
        const { hostname, protocol, port } = window.location;
        return `${protocol}//${hostname}:${port}/iframe`;
    }, []);

    return (
        <div>
            <Header/>

            <div className="title-container">
                <span className="site-title">Subscribe</span>
            </div>

            <StyledButton onButtonClick={showModal} title="Subscribe to our channel" />

            <Modal show={modalShow} handleClose={hideModal}>
                <iframe className="iframe" src={iFrameUrl} title="Choose options"/>
            </Modal>
        </div>
    )
};

export default SubscriptionPage;