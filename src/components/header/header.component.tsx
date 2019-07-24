import React from 'react';

import { APP_NAME } from './../../constants/global-constants.constant';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LocalHospital from '@material-ui/icons/LocalHospital';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      background: '#C62828'
    },
    appBar: {
      background: '#C62828'
    }
  }),
);

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LocalHospital className={classes.menuButton} color="inherit" aria-label="Menu">star</LocalHospital>
          <Typography variant="h6" className={classes.title}>
            {APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
