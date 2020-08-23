import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import config from 'config/default';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => {
  return ({
    outer: {
    },
    inner: {
    },
    [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
    },
    [theme.breakpoints.up('md')/* '@media (min-width: 960px)' */]: {
      /* outer: {
        margin: '0.5rem 0.41% 0.5rem',
        width: '19%',
      }, */
    },
  });
});

const Diagnosis = ({ diagnosisData, style, }) => {
  const classes = useStyles();

  return (
    <NavLink
      className={classes.outer}
      style={style}
      to={'/diagnoses/' + diagnosisData.id}
    >
      <div
        className={classes.inner}
        style={{ margin: 'auto', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
      >
        <img
          alt={diagnosisData.name}
          title={diagnosisData.name}
          src={config.api + 'images/' + diagnosisData.imageUrl}
          width='100%'
          height='100%'
          style={{ borderRadius: '10px' }} />
      </div>
    </NavLink>
  );
};

export default Diagnosis;
