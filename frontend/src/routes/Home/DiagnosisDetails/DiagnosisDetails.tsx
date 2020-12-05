import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import NavigationRow from './NavigationRow';
import { RootState } from 'src/modules/store';
import { match } from 'react-router-dom';
import DescriptionComponent from './DescriptionComponent';

const useStyles = makeStyles((theme) => {
  /* console.log(theme); */
  return {
    outer: {},
    imageWrapper: {
      width: '100%',
      margin: '0.5rem',
      marginTop: '0rem',
      height: 'fit-content',
    },
    titleXs: {
      fontWeight: 900,
      fontSize: '1.5rem',
      margin: '0rem auto 0.5rem',
    },
    [theme.breakpoints.up('sm') /* '@media (min-width: 600px)' */]: {
      imageWrapper: {
        marginTop: '0rem',
        margin: '0rem',
      },
      titleXs: {
        display: 'none',
      },
      outer: {
        marginTop: '1rem',
      },
    },
  };
});

// TODO check match typing
const DiagnosisDetails = ({
  match,
}: {
  match: match<{ diagnosisId: string }>;
}) => {
  const classes = useStyles();
  const diagnosisId = match.params.diagnosisId;
  const diagnosesData = useSelector((state: RootState) => state.diagnosesData);
  const indexOfDiagnosis = diagnosesData.findIndex(
    (diagnosis) => diagnosis.id === diagnosisId
  );


  /* const imageElementRef = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    if (indexOfDiagnosis !== -1 && imageElementRef.current?.complete) {
      imageElementRef.current.src = '';
      Promise.resolve().then(() => {
        if (imageElementRef.current) {
          imageElementRef.current.src = '/fullImages/' + diagnosesData[indexOfDiagnosis].imageUrl;
        }
      });
    }
  }, [indexOfDiagnosis, diagnosesData]); */

  if (indexOfDiagnosis === -1) {
    return <div>This diagnosis does not exist :(</div>;
  }

  const diagnosisData = diagnosesData[indexOfDiagnosis];

  return (
    <div
      style={{
        width: '95%',
        maxWidth: '1270px',
      }}
    >
      <NavigationRow
        currentIndex={indexOfDiagnosis}
        diagnosesData={diagnosesData}
      />
      <Grid container className={classes.outer}>
        <div className={classes.titleXs}>{diagnosisData.name}</div>
        <Grid item xs={12} sm={6} className={classes.imageWrapper}>
          <img
            alt={diagnosisData.name}
            src={diagnosisData.imageUrl}
            width="100%"
            height="100%"
            style={{ borderRadius: '5%' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ background: 'white', borderRadius: '30px' }}
        >
          <DescriptionComponent diagnosisData={diagnosisData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DiagnosisDetails;
