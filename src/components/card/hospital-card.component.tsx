import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    card: {
      fontFamily: "Lato",
      maxWidth: 100 + '%',
      margin: 2 + 'rem',
    },
    media: {
      height: 140,
    },
    directionsButton: {
      backgroundColor: "#2979FF"
    },
    label: {
      color: "red",
      fontSize: "0.5rem"
    }
  }),
);

export default function MediaCard(props: any) {
  const classes = useStyles();
  const t = true;

  return (
    <Card className={classes.card}>
      <CardHeader
        component="h5"
        subheader="PA Hospital Finder"
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.name : 'null'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.address : 'null'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.phone : 'null'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.website : 'null'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props && props.nearestHospital && props.nearestHospital.mapsUrl ? props.nearestHospital.mapsUrl : 'null'}>
          <Button className="directionsButton" fullWidth={t} size="large">
            Directions
        </Button>
        </a>
      </CardActions>
    </Card>
  );
}