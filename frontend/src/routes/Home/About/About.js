import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useSelector, useDispatch } from 'react-redux';
import DiagnosisThumbnail from './DiagnosisThumbnail';
import { push } from 'connected-react-router';

const useStyles = makeStyles(theme => {
    return ({
        outer: {
            textAlign: 'center',
            width: '700px',
            maxWidth: '100%',
            backgroundColor: 'white',
            borderRadius: '30px',
            padding: '0rem 1rem',
            margin: '1rem 0rem',
        },
        contactItems: {
            marginBottom: '0.5rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
            outer: {
                padding: '0px 50px',
                margin: '2rem 0rem 1rem',
            },
        },
    });
});

const About = () => {
    const classes = useStyles();
    const diagnosesData = useSelector(state => state.diagnosesData);
    const dispatch = useDispatch();

    return (
        <Grid container className={classes.outer}>
            <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '2rem', fontWeight: 'bold' }}>Gallery</div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            cursor: 'pointer',
                        }}
                        onClick={
                            () => { dispatch(push('/diagnoses')); }
                        }
                    >
                        {diagnosesData.map(diagnosisData => (
                            <DiagnosisThumbnail key={diagnosisData.id} diagnosisData={diagnosisData} />
                        ))}
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: 'center', }}>
                <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '2rem', fontWeight: 'bold' }}>About the project</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <div style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                            {`Dark diagnosis is a project which combines illustrations with medical descriptions of diseases. The idea is to raise awareness and inform a wider audience about rare diagnoses, and also to promote and support science.`}
                        </div>
                        <div style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                            {`Below every illustration and description you can find links to evidence based medical articles. In addition, every topic is connected to the respective Croatian association that helps patients with the described disease.`}
                        </div>
                        <div style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                            {`As a future goal of the project we would like to establish a charity art exhibition with the availability of merchandise for the donation to humanitarian causes.`}
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Contact us</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <div className={classes.contactItems}>
                            <FacebookIcon style={{ margin: '0.5rem', color: '#673ab7' }} />
                            <a href='https://www.facebook.com/darkdiagnosis/'>facebook.com/darkdiagnosis</a>
                        </div>
                        <div className={classes.contactItems}>
                            <InstagramIcon style={{ margin: '0.5rem' }} />
                            <a href='https://www.instagram.com/darkdiagnosis/'>instagram.com/darkdiagnosis</a>
                        </div>
                        <div className={classes.contactItems}>
                            <MailOutlineIcon style={{ margin: '0.5rem' }} />
                            <span>darkdiagnosis1@gmail.com</span>
                        </div>
                    </div>
                </div>
            </Grid>

            {/* <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                <div style={{marginBottom: '4rem'}}>
                    <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Lokacija</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{marginBottom: '1rem'}}>Adresa: Zagrebačka 123, 10000 Zagreb</div>
                        <MapContainer style={{width: '100%', height: '400px'}} />
                    </div>
                </div>
            </Grid> */}
        </Grid>
    );
};

export default About;
