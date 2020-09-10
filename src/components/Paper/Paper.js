import React, { memo } from 'react';
import makeStyles from 'styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from 'components/Typography';
import userIcon from 'assets/user-circle.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '226px',
    '& > *': {
      width: '226px',
      height: '204px',
      margin: '0px',
      background: '#F5F5F5',
    },
  },
  userIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '83.31px',
    height: '83.31px',
    marginTop: '16px',
  },
}));

const PaperComponent = ({ people }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div style={{ marginBottom: '10px' }}>
          <img className={classes.userIcon} src={userIcon} alt="Offf" />
        </div>
        <Typography color="themePrimary" size={26}>
          {people?.name}
        </Typography>
        <Typography color="themePrimary" size={12}>
          {people?.homeworld}
        </Typography>
      </Paper>
    </div>
  );
};

export default memo(PaperComponent);
