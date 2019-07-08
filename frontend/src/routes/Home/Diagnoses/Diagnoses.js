import React from 'react';
import Diagnosis from './Diagnosis';

import diagnosisUrl1 from './diagnosis1.jpg';
import diagnosisUrl2 from './diagnosis2.jpg';
import diagnosisUrl3 from './diagnosis3.jpg';
import diagnosisUrl4 from './diagnosis4.jpg';
import diagnosisUrl5 from './diagnosis5.jpg';
import diagnosisUrl6 from './diagnosis6.jpg';


const Diagnoses = () => {

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            {diagnosisDataList.map((diagnosisData, index) => (
                <Diagnosis key={index} diagnosisData={diagnosisData} />
            ))}
        </div>
    );
}

export default Diagnoses;


const diagnosisDataList = [
    {
        imageUrl: diagnosisUrl1
    },
    {
        imageUrl: diagnosisUrl2
    },
    {
        imageUrl: diagnosisUrl3
    },
    {
        imageUrl: diagnosisUrl4
    },
    {
        imageUrl: diagnosisUrl5
    },
    {
        imageUrl: diagnosisUrl6
    },
    {
        imageUrl: diagnosisUrl3
    },
    {
        imageUrl: diagnosisUrl4
    },
];
