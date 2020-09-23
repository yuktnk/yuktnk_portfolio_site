import React from 'react'
import '../assets/styles/style.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Yuki from '../assets/img/avatar2.jpg';
import Link from '@material-ui/core/Link';

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
        <Link href="https://github.com/yuktnk" target="_blank">
          <GitHubIcon style={{ fontSize: 20, color: "lightgray", marginRight: 20 }} />
        </Link>

        <Link href="https://twitter.com/cntx_planar50" target="_blank">
          <TwitterIcon style={{ fontSize: 20, color: "lightgray" }} />
        </Link>
      </div>
      <p>- Profile -</p>
      <p>4年間お世話になったECサイトを運営する会社を退職し、
        プログラミングスクールTECH::CAMPにて70日間（6/22〜8/31）
        プログラミング学習に励んでおりました。<br />
        現在はエンジニア転職を目指し、Reactを中心に毎日プログラミング学習を行っています。</p>
    </div>
  )
}

export default Profile
