import React from 'react'
import '../assets/styles/style.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
  },
}));


const Profile = () => {
  const classes = useStyles();
  return (
    <div className="profile">
      <div className={classes.root}>
        <Avatar alt="yuki" src="../assets/img/avatar.jpg" className={classes.large} />
      </div>
      <h1>Yuki Tanaka</h1>
      <p>SNSアイコンを入れる</p>
      <p>テキストテキストテキストテキストテキストテキスト</p>

    </div>
  )
}

export default Profile
