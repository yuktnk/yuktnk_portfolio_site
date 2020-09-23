import React from 'react'
import '../assets/styles/style.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Yuki from '../assets/img/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    boxShadow: "0 2px 5px rgba(0,0,0,0.26)",
  },
}));


const Profile = () => {
  const classes = useStyles();
  return (
    <div className="profile">
      <div className={classes.root}>
        <Avatar alt="yuki" src={Yuki} className={classes.large} />
      </div>
      <h1>Yuki Tanaka</h1>
      <div>
        <GitHubIcon style={{ fontSize: 20, color: "lightgray", marginRight: 20 }} />
        <TwitterIcon style={{ fontSize: 20, color: "lightgray" }} />
      </div>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

    </div>
  )
}

export default Profile
