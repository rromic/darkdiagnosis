import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import DiagnosisThumbnail from '../DiagnosisThumbnail';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { DiagnosisData } from 'src/modules/diagnosesData';

const useStyles = makeStyles((theme) => {
  return {
    outer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0.3rem -0.5rem 1.5rem',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      width: '75px',
      height: '45px',
    },
    [theme.breakpoints.up('sm') /* '@media (min-width: 600px)' */]: {
      outer: {
        margin: '1rem -1rem 2rem',
      },
      navItem: {
        width: '90px',
        height: '55px',
      },
    },
  };
});

const NavigationRow = ({
  currentIndex,
  diagnosesData,
  priority,
}: {
  currentIndex: number;
  diagnosesData: DiagnosisData[];
  priority: boolean,
}) => {
  const classes = useStyles();
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  const dispatch = useDispatch();

  return (
    <div className={classes.outer} style={{ position: priority ? undefined : 'absolute', top: priority ? undefined : '-1000px' }}>
      {nextIndex <= diagnosesData.length - 1 ? (
        <div className={classes.navItem}  style={{ justifyContent: 'flex-start' }}>
          <ArrowLeftIcon
            fontSize="large"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(push('/diagnoses/' + diagnosesData[nextIndex].id));
            }}
          />
          <DiagnosisThumbnail
            key={nextIndex}
            diagnosisData={diagnosesData[nextIndex]}
            style={{ transform: 'translateX(-5px)' }}
            priority={priority}
          />
        </div>
      ) : (
        <div className={classes.navItem} />
      )}
      <NavLink to="/">
        <HomeIcon
          className={classes.navItem}
          style={{
            color: 'black',
          }}
        />
      </NavLink>
      {previousIndex >= 0 ? (
        <div className={classes.navItem} style={{ justifyContent: 'flex-end' }}>
          <DiagnosisThumbnail
            key={nextIndex}
            diagnosisData={diagnosesData[previousIndex]}
            style={{ transform: 'translateX(5px)' }}
            priority={priority}
          />
          <ArrowRightIcon
            fontSize="large"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(push('/diagnoses/' + diagnosesData[previousIndex].id));
            }}
          />
        </div>
      ) : (
        <div className={classes.navItem} />
      )}
    </div>
  );
};

export default NavigationRow;
