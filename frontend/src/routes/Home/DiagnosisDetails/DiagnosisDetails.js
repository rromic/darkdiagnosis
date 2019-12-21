import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => {

    /* console.log(theme); */
    return ({
        /* outer: {
            margin: '2.5rem',
            width: '99%',
        }, */
        imageWrapper: {
            width: '100%',
            marginTop: '2rem'                
        },
        description: {
            margin: '2rem',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
        },        
        [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
            imageWrapper: {
                marginTop: '0rem'                
            },
            description: {
                marginTop: '1rem'
            },
            outer: {
                marginTop: '5rem',
            },
        },
    });
});

const DiagnosisDetails = ({match}) => {
    const classes = useStyles();
    const diagnosisId = match.params.diagnosisId;
    const diagnosesData = useSelector(state => state.diagnosesData);
    const diagnosisData = diagnosesData.find(diagnosis => diagnosis.id === diagnosisId);

    if (diagnosisData === undefined) {
        return (<div>This diagnosis does not exist :(</div>);
    }
    const descriptionComponent = (
        <div className={classes.description}>
            <div style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '0.5rem 0rem'}}>{diagnosisData.name}</div>
            <div>{diagnosisData.description}</div>
            <div style={{margin: '2rem 0rem 1rem', fontWeight: 'bold', fontSize: '1.2rem'}}>Links</div>
            {diagnosisData.links.map((link, index) => (
                <a
                    key={index}
                    style={{marginBottom: '0.5rem', wordBreak: 'break-word', }}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {link}
                </a>
            ))}
        </div>
    );

    return (
        <Grid container className={classes.outer}>
            <Grid item xs={12} sm={6} className={classes.imageWrapper}>
                <img alt={diagnosisData.name} src={diagnosisData.imageUrl} width='100%' height='100%' style={{borderRadius: '5%'}}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{background: 'white', borderRadius: '30px'}}>
                {descriptionComponent}
            </Grid>
        </Grid>
    );
};

export default DiagnosisDetails;
