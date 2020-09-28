import React from 'react';
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { StyledButtonWithLink } from './styledButton';
import '../../assets/styles/header.css';

const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(2),
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <header className="header-container">
                <img src={logo} className="logo" alt="logo" />
                <span className='company-name'>Sophie Cooper Inc.</span>
            </header>
            <div className="nav-container">
                <StyledButtonWithLink title={"Home"} linkDestination={"/"} className={classes.button}/>
                <StyledButtonWithLink title={"Subscribe Here"} linkDestination={"/secondaryPage"} className={classes.button}/>
            </div>
        </div>
    )
};

export default Header;