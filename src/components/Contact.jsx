import React from 'react'
import FormDialog from './Forms/FormDialog.jsx'
import Button from '@material-ui/core/Button';
import TweetEmbed from 'react-tweet-embed';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      open: false
    }
  this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <TweetEmbed />
        <h4 className="content-title">- Contact & SNS -</h4>
        <div className="contact">
          <div className="tweets">
            <a className="twitter-timeline" href="https://twitter.com/cntx_planar50?ref_src=twsrc%5Etfw">
              Tweets by cntx_planar50
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
          </div>
          <div className="SNS">
            <div className="toSNS">
              <Button onClick={this.handleOpen} variant="contained" style={{height:48, width: 156, letterSpacing: "0.1em"}}>
                <EmailIcon style={{ fontSize: 16, marginRight: 12 }} />問い合わせる
              </Button>
              <p className="toSNSText">（Slackで通知を受け取り、確認でき次第ご返信いたします。）</p>
              <FormDialog open={this.state.open} handleClose={this.handleClose}/>
            </div>

            <div className="toSNS">
              <Link href="https://github.com/yuktnk" target="_blank">
                <Button variant="contained" style={{height:48, width: 156, color: "white", backgroundColor: "#171515", textTransform: "none", letterSpacing: "0.1em"}}>
                  <GitHubIcon style={{ fontSize: 16, marginRight: 12 }} />GitHub
                </Button>
              </Link>
              <p className="toSNSText">（別タブで開きます。）</p>
              <FormDialog open={this.state.open} handleClose={this.handleClose}/>
            </div>

            <div className="toSNS">
              <Link href="https://twitter.com/cntx_planar50" target="_blank">
                <Button variant="contained" style={{height:48, width: 156, color: "white", backgroundColor: "#00acee", textTransform: "none", letterSpacing: "0.1em"}}>
                  <TwitterIcon style={{ fontSize: 16, marginRight: 12 }} />Twitter
                </Button>
              </Link>
              <p className="toSNSText">（別タブで開きます。）</p>
              <FormDialog open={this.state.open} handleClose={this.handleClose}/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

export default Contact

