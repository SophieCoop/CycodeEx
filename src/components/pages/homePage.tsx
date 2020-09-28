import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StyledButtonWithLink } from '../elements/styledButton';
import Header from '../elements/header';
import ChipItem from '../interfaces/chipItem';
import { RootState } from '../../reducers/index';
import { setDocumentTitle } from '../utils/documentUtils';

import '../../assets/styles/mainPage.css';

const HomePage = () => {
    const [mainPageTitle, setMainPageTitle] = useState<string>("Welcome to my site");
    const isSubscribed: boolean = useSelector((state: RootState) => state.isSubscribed);
    const options: ChipItem[] = useSelector((state: RootState) => state.options);

    useEffect(()=> {
        setDocumentTitle('Main Page');
    }, [])

    useEffect(() => {
        if (isSubscribed) {
            setMainPageTitle("Welcome, user subscribed");
        }
    },[isSubscribed]);
    
    const ChosenTagsComponent = useMemo(() => {
        const selectedOptions = options.filter(item => item.isSelected).map(item => item.label);
        const title = selectedOptions.length > 0 ? "These are the selected options: " : "No selected options";

        return <div style={{marginBottom:"30px"}}>{title + selectedOptions.join(", ")}</div>;
    }, [options]);
    
    return (
        <div>
            <Header/>

            <div className="title-container">
                <span className="site-title">{mainPageTitle}</span>
            </div>

            { isSubscribed && ChosenTagsComponent }

            <StyledButtonWithLink title={"NextPage"} linkDestination={"/secondaryPage"}/>
        </div>
    )
};

export default HomePage;