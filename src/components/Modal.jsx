import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import GitHubIcon from '@material-ui/icons/GitHub';
import { Piece } from './index';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    color: "gray",
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Photo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const exist = props.url

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        <Piece title={props.title} content={props.content} image={props.image} onClick={handleOpen}/>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.modal}>
              <h3>{props.title} </h3>
              { exist ? (
              <Link href={props.url} target="_blank">
                <GitHubIcon style={{ fontSize: 20, color: "lightgray", marginRight: 20 }} />
              </Link>
              ):(<></>)}
            </div>
            <img src={props.image} />
            <p>{props.description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
