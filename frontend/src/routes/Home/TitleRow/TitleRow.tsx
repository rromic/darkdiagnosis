import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import cx from 'classnames';

/* import SpreadMenu from './SpreadMenu'; */
import SidebarMenu from './SidebarMenu';

const useStyles = makeStyles({
  titleRow: {
    /* position: 'fixed',
    top: '0rem', */
    backgroundColor: '#000',
    width: '100%',
    padding: '0rem 1rem 0rem 1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    /* borderBottom: '1px solid black', */
    color: '#FFFFFE',
    opacity: '0.95',
    height: '4.3rem',
    boxSizing: 'border-box',
    zIndex: 100,
  },
  spacer: {
    width: '100%',
    height: '4.3rem',
    backgroundColor: '#000',
    //backgroundColor: '#a48500',
  },
  image: {
    width: '100%',
    maxHeight: '700px',
    overflow: 'hidden',
    textAlign: 'center',
    /* marginTop: '6rem',*/
    marginBottom: '-1rem',
  },
  mdMenu: {
    display: 'none',
  },
  xsMenu: {},
  title: {
    color: '#FFFFFE',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  /* '@media (min-width: 600px)': {
      
  }, */
  '@media (min-width: 960px)': {
    titleRow: {
      height: '6rem',
      padding: '0rem 1.5rem 0rem 1.5rem',
    },
    title: {
      fontSize: '2.3rem',
    },
    spacer: {
      height: '6rem',
    },
    image: {
      marginBottom: '2rem',
    },
    mdMenu: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'right',
      alignItems: 'center',
    },
    /* xsMenu: {
        display: 'none',
    }, */
  },
});

const TitleRow = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.titleRow}>
        <Link to="/" className={classes.title}>
          Dark Diagnosis
        </Link>

        {/* <div className={classes.mdMenu}>
                    <SpreadMenu />
                </div> */}

        <div className={classes.xsMenu}>
          <SidebarMenu />
        </div>
      </div>

      {/* <div className={classes.spacer} /> */}
      {/* <div className={classes.image}>
                <img src={woman} style={{width: '100%'}}/> 
            </div> */}
    </>
  );
};

export default TitleRow;
