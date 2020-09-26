import React from 'react'
import FormDialog from './Forms/FormDialog.jsx'
import Button from '@material-ui/core/Button';


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
      <div>
        <div>
          <a class="twitter-timeline" href="https://twitter.com/cntx_planar50?ref_src=twsrc%5Etfw">Tweets by cntx_planar50</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <Button onClick={this.handleOpen} >問い合わせる</Button>
        <FormDialog open={this.state.open} handleClose={this.handleClose}/>
      </div>
    )
  }
  
}

export default Contact

