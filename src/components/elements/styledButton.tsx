import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface attributes {
    component?: any;
    className?: string;
    to?: string;
    onClick?: any;
}

const StyledButtonWithLink = (props: { title: string, linkDestination: string, className?:string}) => {
    return StyledButton(props);
}

const StyledButton = (props: { title: string, linkDestination?: string, onButtonClick?: any, className?:string }) => {
    const attr: attributes = {
        className: props.className
    };

    if (props.linkDestination) {
        attr.to = props.linkDestination;
        attr.component = Link;

    }else if (props.onButtonClick) {
        attr.onClick = props.onButtonClick;
    }
    
    return (
        <Button variant="contained" color="primary" {...attr} >
            {props.title}
        </Button>
    )
}

export { StyledButton, StyledButtonWithLink };