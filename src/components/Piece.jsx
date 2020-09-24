import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Eremophilanivea from '../assets/img/bgi.jpg'
import Hanabi from '../assets/img/hanabi.jpg';
import Girl from '../assets/img/girl.jpg';
import Higanbana from '../assets/img/higanbana.jpg';

const useStyles = makeStyles({
  pieces: {
    width: 345,
    color: "gray",
    margin: 8
  },
  piece: {
    Width: 345,
  },
  media: {
    height: 240,
  },
  
});

const Piece = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.pieces}>
      {/* <Card className={classes.pieces}>
        <CardActionArea className={classes.piece}>
          <CardMedia
            className={classes.media}
            image={Eremophilanivea}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              エレモフィラニベア
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.pieces}>
        <CardActionArea className={classes.piece}>
          <CardMedia
            className={classes.media}
            image={Hanabi}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              花火
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.pieces}>
        <CardActionArea className={classes.piece}>
          <CardMedia
            className={classes.media}
            image={Girl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              少女
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.pieces}>
        <CardActionArea className={classes.piece}>
          <CardMedia
            className={classes.media}
            image={Higanbana}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              彼岸花
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.pieces}>
        <CardActionArea className={classes.piece}>
          <CardMedia
            className={classes.media}
            image={Hanabi}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              花火
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}

      <Card className={classes.pieces}>
        <CardActionArea className={classes.piece}>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  )
}

export default Piece
