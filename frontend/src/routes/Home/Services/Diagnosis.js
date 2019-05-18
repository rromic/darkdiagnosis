import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {

    //console.log(theme);
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
};

class Diagnosis extends React.Component {
    render() {
        const {classes, diagnosisData} = this.props;

        return (
            <div className={classes.outer} >
                <Grid container spacing={32} style={{alignContent: 'space-around'}}>
                    {/* <Grid item xs={12} md={12} lg={4}>
                        <div style={{fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0.5rem'}}>Diagnosis name</div>
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`}
                    </Grid> */}
                    {/* <div style={{
                        backgroundImage: `url(${diagnosisUrl})`,
                        backgroundSize: '100% 90%',
                        width: '300px',
                        height: '300px',
                        backgroundPositionY: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} /> */}

                    <Grid item xs={12}>
                        <div className={classes.inner} style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                            <img src={diagnosisData.imageUrl} width='100%' height='100%' style={{borderRadius: '10px'}}/>
                        </div>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} lg={4}>
                        <div style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                            <img src={diagnosisUrl2} width='100%' height='100%' style={{borderRadius: '10px'}} />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                        <div style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                            <img src={diagnosisUrl3} width='100%' height='100%' style={{borderRadius: '10px'}}/>
                        </div>
                    </Grid> */}
                </Grid>
                
            </div>
        );
    }
}

export default withStyles(styles)(Diagnosis);
