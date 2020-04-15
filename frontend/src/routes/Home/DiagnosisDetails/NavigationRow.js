import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import DiagnosisThumbnail from '../DiagnosisThumbnail';

const useStyles = makeStyles(theme => {
  return ({
    outer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0rem 1rem 1rem 1rem',
    },
    [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
      outer: {
        margin: '0.5rem 0rem 2rem',
      },
    },
  });
});
const NavigationRow = ({ currentIndex, diagnosesData }) => {
  const classes = useStyles();
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  return (
    <div className={classes.outer}>
      {previousIndex > 0 ? <DiagnosisThumbnail diagnosisData={diagnosesData[previousIndex]} mini={true} />
        : <div />
      }
      <NavLink to='/about'><HomeIcon style={{width: '2rem', height: '2rem'}}/></NavLink>
      {nextIndex < diagnosesData.length - 1 ? <DiagnosisThumbnail diagnosisData={diagnosesData[nextIndex]} mini={true} />
        : <div />
      }
    </div>
  );
};

export default NavigationRow;