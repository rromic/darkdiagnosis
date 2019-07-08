import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';

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

    const [showDescription, setShowDescription] = useState(false);
    const [showDescription2, setShowDescription2] = useState(false);


    const descriptionComponent = (
        <div>
            <div style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '0.5rem 0rem'}}>Diagnosis name</div>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`}
        </div>
    );

    return (
        <NavLink className={classes.outer} to='diagnoses/123'>
            <div 
                onClick={() => {setShowDescription(!showDescription);}}
                className={classes.inner}
                style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}
            >
                <img src={diagnosisData.imageUrl} width='100%' height='100%' style={{borderRadius: '10px'}}/>
            </div>
            {showDescription && descriptionComponent}
        </NavLink>
    );
};

export default Diagnosis;
