import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

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

const DiagnosisDetails = ({match}) => {
    const classes = useStyles();
    const diagnosisId = Number.parseInt(match.params.diagnosisId);
    const diagnosesData = useSelector(state => state.diagnosesData);
    const diagnosisData = diagnosesData.find(diagnosis => diagnosis.id === diagnosisId);

    if (diagnosisData === undefined) {
        return (<div>This diagnosis does not exist :(</div>);
    }
    const descriptionComponent = (
        <div>
            <div style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '0.5rem 0rem'}}>Diagnosis name</div>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`}
        </div>
    );

    return (
        <div className={classes.outer} >
            <div
                className={classes.inner}
                style={{margin: 'auto',/*  display: 'flex', */ justifyContent: 'center'}}
            >
                <img src={diagnosisData.imageUrl} width='100%' height='100%' style={{borderRadius: '10px'}}/>
                {descriptionComponent}
            </div>
        </div>
    );
};

export default DiagnosisDetails;
