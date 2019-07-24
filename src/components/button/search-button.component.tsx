import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

export default function SearchButton() {
  const classes = useStyles();

  const print = () => {
    console.log('clicked!');
  }

  return (
    <div>
      <Button onClick={print} size="large" className={classes.margin}>
        Find A Hospital
      </Button>
    </div>
  );
}