import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {

  /* console.log(theme); */
  return ({
    outer: {
      margin: '0.5rem 0.41% 0.5rem',
      width: '19%',
    },
    inner: {
    },
    [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
      outer: {
        margin: '0.5rem 0.41% 0.5rem',
        width: '19%',
      },
    },
    [theme.breakpoints.up('md')/* '@media (min-width: 960px)' */]: {
      outer: {
        margin: '0.5rem 0.41% 0.5rem',
        width: '9%',
      },
    },
  });
});

const Diagnosis = ({ diagnosisData }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.outer}
    >
      <div
        className={classes.inner}
        style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}
      >
        <img
          alt={diagnosisData.name}
          title={diagnosisData.name}
          src={diagnosisData.imageUrl}
          width='100%'
          height='100%'
          style={{ borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default Diagnosis;
