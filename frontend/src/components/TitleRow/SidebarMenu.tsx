import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'src/modules/store';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  sidebarPaper: {
    width: '170px',
    backgroundColor: 'black',
  },
  listItem: {
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.3rem',
  },
});

const SidebarMenu = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /////////hack to trigger sidebare close on route change///////////
  const route = useSelector((state: RootState) => state.router.location.pathname);
  useEffect(() => {
    setSidebarOpen(false);
  }, [route]);
  /////////////////////////////////////////////////////////////////

  return (
    <>
      <div
        style={{ cursor: 'pointer', display: 'flex', marginLeft: '2rem', }}
      >
        <MenuIcon onClick={() => setSidebarOpen(true)} />
      </div>
      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        classes={{ paper: classes.sidebarPaper }}
        /* ModalProps={{ disableScrollLock: true, onScroll: (ev) => {console.log('scroll'); ev.stopPropagation()} }} */
      >
        <List
        >
          <NavLink to='/' exact className={classes.link}
            activeStyle={{ cursor: 'default', fontWeight: 900, }}
          >
            <ListItem className={classes.listItem}>
              <ListItemText disableTypography primary={'Home'} />
            </ListItem>
          </NavLink>
          <NavLink to='/admin' exact className={classes.link}
            activeStyle={{ cursor: 'default', fontWeight: 900, }}
          >
            <ListItem className={classes.listItem}>
              <ListItemText disableTypography primary={'Admin'} />
            </ListItem>
          </NavLink>
          {/* <NavLink to='/diagnoses' exact className={classes.link}
            activeStyle={{ cursor: 'default', fontWeight: 900, }}
          >
            <ListItem className={classes.listItem}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText disableTypography primary={'Gallery'} />
            </ListItem>
          </NavLink> */}
        </List>
      </Drawer>
    </>
  );
};

export default SidebarMenu;

/* servicesClickHandler = () => {
    window.scrollTo(0, window);
    this.onSetSidebarOpen(false);
    this.props.servicesClickHandler();
}

contactClickHandler = () => {
    window.scrollTo(0, window);
    this.onSetSidebarOpen(false);
    this.props.contactClickHandler();
} */
