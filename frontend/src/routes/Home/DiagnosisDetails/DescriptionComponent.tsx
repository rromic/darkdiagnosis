import { makeStyles } from '@material-ui/core';
import React from 'react';
import { DiagnosisData } from 'src/modules/diagnosesData';

const useStyles = makeStyles((theme) => {
  /* console.log(theme); */
  return {
    description: {
      margin: '1rem',
      marginTop: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
    },
    titleSm: {
      display: 'none',
    },
    [theme.breakpoints.up('sm') /* '@media (min-width: 600px)' */]: {
      description: {
        marginTop: '0rem',
      },
      titleSm: {
        display: 'initial',
        fontWeight: 900,
        fontSize: '1.4rem',
        margin: '0.2rem 0rem 1rem',
      },
    },
  };
});

const DescriptionComponent = ({diagnosisData}: {diagnosisData: DiagnosisData}) => {
  const classes = useStyles();

  return (
    <div className={classes.description}>
      <div className={classes.titleSm}>{diagnosisData.name}</div>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {diagnosisData.description}
      </div>
      <div
        style={{
          margin: '2rem 0rem 1rem',
          fontWeight: 900,
          fontSize: '1.2rem',
        }}
      >
        Links
      </div>
      {diagnosisData.links.map((link, index) => (
        <a
          key={index}
          style={{ marginBottom: '0.5rem', wordBreak: 'break-word' }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default DescriptionComponent;