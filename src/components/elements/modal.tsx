import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import '../../assets/styles/modal.css';
import { subscribeEvent } from '../../actions';
import { StyledButton } from '../elements/styledButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
}));


const Modal = (props: { handleClose: any, show: boolean, children?: any }) => {
  const showHideClassName = props.show ? "display-block" : "";
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();


  const onSubmitForm = () => {
    props.handleClose();
    dispatch(subscribeEvent(true));
    history.push("/");
    window.location.reload(true);
  }

  return (
    <div className={"modal " + showHideClassName} onClick={props.handleClose}>
      <section className="modal-main">

        <CloseIcon className="close-icon" onClick={props.handleClose} />

        {props.children}

        <StyledButton title="Submit" onButtonClick={onSubmitForm} className={classes.button}/>
        
      </section>
    </div>

  );
};


export default Modal;