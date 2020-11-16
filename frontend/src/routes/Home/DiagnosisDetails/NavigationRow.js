import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import DiagnosisThumbnail from '../DiagnosisThumbnail';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles(theme => {
  return ({
    outer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0.3rem -0.5rem 1rem',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      width: '75px',
      height: '45px',
    },
    [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
      outer: {
        margin: '0.5rem -1rem 2rem',
      },
      navItem: {
        width: '90px',
        height: '55px',
      },
    },
  });
});
const NavigationRow = ({ currentIndex, diagnosesData }) => {
  const classes = useStyles();
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  const dispatch = useDispatch();

  return (
    <div className={classes.outer}>
      {nextIndex <= diagnosesData.length - 1 ?
        <div
          className={classes.navItem}
        >
          <ArrowLeftIcon fontSize='large' style={{ cursor: 'pointer', }} onClick={() => { dispatch(push('/diagnoses/' + diagnosesData[nextIndex].id)); }} />
          <DiagnosisThumbnail diagnosisData={diagnosesData[nextIndex]} style={{ transform: 'translateX(-5px)', }} />
        </div>
        : <div className={classes.navItem} />
      }
      <NavLink to='/'><HomeIcon style={{ width: '2rem', height: '2rem', color: 'black', marginTop: '5px', }} /></NavLink>
      {previousIndex >= 0 ?
        <div
          className={classes.navItem}
        >
          <DiagnosisThumbnail diagnosisData={diagnosesData[previousIndex]} style={{ transform: 'translateX(5px)', }} />
          <ArrowRightIcon fontSize='large' style={{ cursor: 'pointer', }} onClick={() => { dispatch(push('/diagnoses/' + diagnosesData[previousIndex].id)); }} />
        </div>
        : <div className={classes.navItem} />
      }
    </div>
  );
};

export default NavigationRow;