import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { CardWorkPhoto } from './index';
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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DetailWorkPhoto = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const existGitHub = props.GitHubUrl;
  const existMyApp = props.MyAppUrl;

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        <CardWorkPhoto title={props.title} content={props.content} image={props.image} onClick={handleOpen}/>
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
            <h3 className={classes.modal}>{props.title} </h3>
            <img src={props.image} alt={props.title} style={{ marginBottom: 16 }} />
            <div className={classes.modal}>
              { existMyApp ? (
                <Link href={props.MyAppUrl} target="_blank">
                  <Button variant="contained" style={{height:48, width: 156, letterSpacing: "0.1em", marginRight: 16 }}>
                      見てみる！
                  </Button>
                </Link>
              ):(null)}

              { existGitHub ? (
                <Link href={props.GitHubUrl} target="_blank">
                  <Button variant="contained" style={{height:48, width: 156, color: "white", 
                  backgroundColor: "#171515", textTransform: "none", letterSpacing: "0.1em"}}>
                      <GitHubIcon style={{ fontSize: 16, marginRight: 12 }} />GitHub
                  </Button>
                </Link>
              ):(null)}

            </div>
            <p>{props.description2}</p>
            <p>{props.description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DetailWorkPhoto