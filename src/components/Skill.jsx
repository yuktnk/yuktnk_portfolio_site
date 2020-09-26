import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: 8
  },
  field: {
    color: "lightgray",
    fontSize: 12,
  },
  title: {
    color: "gray",
    fontFamily: "Roboto Slab, Times New Roman, serif"
  },
  pos: {
    marginBottom: 12,
  },
});

const Skill = (props) => {
  const classes = useStyles();
  return (
    <div className="skill">
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.field} gutterBottom>
          {props.field}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
          {props.title}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.field}>詳しく</Button>
      </CardActions>
    </Card>
    </div>
  )
}
export default Skill