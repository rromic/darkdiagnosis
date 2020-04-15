import React from 'react';
import Diagnosis from './Diagnosis';
import {useSelector} from 'react-redux';

const Diagnoses = () => {
    const diagnosesData = useSelector(state => state.diagnosesData);

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            {diagnosesData.map(diagnosisData => (
                <Diagnosis key={diagnosisData.id} diagnosisData={diagnosisData} />
            ))}
        </div>
    );
};

export default Diagnoses;

