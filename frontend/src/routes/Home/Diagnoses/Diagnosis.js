import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => {

    console.log(theme);
    return ({
        outer: {
            margin: '2.5rem 0.41% 1rem',
            width: '99%',
        },
        inner: {
            cursor: 'pointer',
        },
        [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
            outer: {
                width: '49.1%'
            },
        },
        [theme.breakpoints.up('md')/* '@media (min-width: 960px)' */]: {
            outer: {
                width: '32.5%'
            },
        },
    });
});

const Diagnosis = ({diagnosisData}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div 
            className={classes.outer}
            onClick={
                ()=>{dispatch(push('/diagnoses/' + diagnosisData.id));}
            }
        >
            <div
                className={classes.inner}
                style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}
            >
                <img
                    title={diagnosisData.name}
                    src={diagnosisData.imageUrl}
                    width='100%'
                    height='100%'
                    style={{borderRadius: '10px'}}/>
            </div>
        </div>
    );
};

export default Diagnosis;
