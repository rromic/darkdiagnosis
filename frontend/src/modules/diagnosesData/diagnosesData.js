import _65roses from './65roses.jpg';
import aliceInWonderland from './aliceInWonderland.jpg';
import bloodTypeChange from './bloodTypeChange.jpg';
import brittleBoneDisease from './brittleBoneDisease.jpg';
import bubbleBoy from './bubbleBoy.jpg';
import camelGirl from './camelGirl.jpg';
import diogenesSyndrome from './diogenesSyndrome.jpg';
import ehlers from './ehlers.jpg';
import fregoliSyndrome from './fregoliSyndrome.jpg';
import lightingStrike from './lightingStrike.jpg';
import narcolepsy from './narcolepsy.jpg';
import ondinesCurse from './ondinesCurse.jpg';
import polydactyly from './polydactyly.jpg';
import stonemansDisease from './stonemansDisease.jpg';
import vanishingTwin from './vanishingTwin.jpg';

const diagnosesData = [
    {
        id: 'Fregoli Syndrome',
        name: 'Fregoli Syndrome',
        description: `Capgras syndrome is a delusional neurologic disorder characterized by a belief that close family members or friends have been replaced by identical „doubles“. The delusion was first described in 1923 when French psychiatrist Joseph Capgras observed a woman „Madame Macabre“ who claimed that imposters replaced her family members. Fregoli syndrome is also a delusional misidentification syndrome where patients believe that different people are the same person who change appearances in order to trick them.`,
        imageUrl: fregoliSyndrome
    },
    {
        id: '65 Roses',
        name: '65 Roses',
        description: `Cystic Fibrosis is an inherited multisystem disease in which chloride channels of exocrine glands are dysfunctional. An abnormality of chloride permeability and inability to move water to the cell surface make bodily secretions salty and thick. Subsequently overgrowth of bacteria in the viscous secretions of the respiratory tract causes chronic and life-threatening pulmonary infections. Other characteristics of this disease are malnutrition due to exocrine pancreatic insufficiency, constipation, male infertility and elevation of chloride levels in a person's sweat. The phrase „65 Roses“ for Cystic Fibrosis was created by Richard Weiss, who overheard his mother while she was making telephone calls seeking donations for CF research.`,
        imageUrl: _65roses
    },
    {
        id: 'Brittle Bone Disease',
        name: 'Brittle Bone Disease',
        description: `Osteogenesis imperfecta, colloquially known as "brittle bone disease", is a group of heritable genetic disorders, characterized by defects in connective tissue. The main symptom is extreme fragility of bones due to defects in collagen synthesis. Other manifestations may include blue sclerae, weak teeth, short statue, hearing loss and cardiorespiratory problems. The disease consists of 13 types; type II is the most severe and lethal form. Because of multiple fractures, osteogenesis imperfecta can be mistaken for child abuse.`,
        imageUrl: brittleBoneDisease
    },
    {
        id: 'Alice in Wonderland Syndrome',
        name: 'Alice in Wonderland Syndrome',
        description: `Alice in Wonderland syndrome, also known as Todd's syndrome is a neurological condition in which visual perception is damaged. This state causes that objects appear in different size than normal, closer or further away than they are. Patients can experience feelings that body parts are larger or smaller and symptoms of derealisation and depersonalisation. It is speculated that a writer, Lewis Carroll, described his own symptoms in the book ' Alice's Adventures in Wonderland', where the main character felt same perceptual alterations.`,
        imageUrl: aliceInWonderland
    },,
    {
        id: `Ondine's curse`,
        name: `Ondine's curse`,
        description: `A rare medical disorder in which autonomic nerve system and mechanisms of breathing control are impaired. Being awake, patients can consciously control their breathing, but if they fall asleep they stop breathing, which can lead to death. This condition in medical terminology is known as 'central alveolar hypoventilation syndrome but it's also called 'Ondine's curse'. According to German fairy tale written by Fouque, Ondine or Undine was a mermaid who was betrayed by her man. Because he promised Ondine every waking breath, she cursed him, and when he fell asleep with another woman, he stopped breathing and died.`,
        imageUrl: ondinesCurse
    },
    {
        id: 'Camel Girl',
        name: 'Camel Girl',
        description: `Congenital genu recurvatum, also called 'back knee deformity' is a rare condition in which the knee joint bends backwards. It is believed that the most common type is a result of uterine compression on abnormally hyperextended fetal knees during pregnancy. The most famous case of genu recurvatum was the circus performer, Ella Harper. Because of the severe form of her condition she walked on all fours, resulting in her nickname 'The Camel girl'. Today, most cases can be treated non-operatively, severe cases require surgical management.`,
        imageUrl: camelGirl
    },
    {
        id: 'Polydactyly',
        name: 'Polydactyly',
        description: `The illustration shows a guitarist who has an extra finger on his hand. The condition is called polydactyly and can be often associated with other congenital anomalies. In this case middle fingers are duplicated and the same length.`,
        imageUrl: polydactyly
    },
    {
        id: 'Ehlers Danlos Syndrome',
        name: 'Ehlers Danlos Syndrome',
        description: `Gary Turner is the current holder of Guiness World Record for the stretchiest skin. He suffers from an extreme form of Ehlers Danlos syndrome. Ehlers Danlos syndromes are a group of genetic disorders that affect the collagen in every part of the body. Symptoms include hyperelastic skin, hypermobile joints, fragile blood vessels and abnormal scar formation. Complications can vary from mild, like loose joints, to severe like aortic dissection which can be fatal. Why the Zebra??`,
        imageUrl: ehlers
    },{
        id: `Stoneman's disease`,
        name: `Stoneman's disease`,
        description: `Fibrodysplasio ossificans progressiva is a genetic condition in which muscles, ligaments and tendons are progressively replaced by bones. This disease, also known as Stoneman's disease, typically affects upper body skeleton and progresses downwards, but any minor muscle trauma can be a trigger for painful ossification. Abnormal extraskeletal ossifications in limb joints, jaw, and rib cage are limiting normal everyday physiological actions such as walking, speaking, eating and breathing. Unfortunately, surgical removal of an extraskeletal bone leads to uncontrolable formation of a new bone.`,
        imageUrl: stonemansDisease
    },{
        id: 'Lighting strike',
        name: 'Lighting strike',
        description: `Have you ever notice the skin of a lightning strike victim. These tree-like patterns are also known as Lichtenberg figures and appear when high voltage electrical discharges pass along the surface of insulating materials.`,
        imageUrl: lightingStrike
    },{
        id: 'Vanishing twin syndrome',
        name: 'Vanishing twin syndrome',
        description: `Vanishing twin syndrome is a phenomenon in which one embryo disappears after documented fetal heart activity in multiple pregnancies. The disappearance usually occurs/happens in early pregnancy, as a consequence of fetal death (the cause is unknown) and the absorption of fetal tissue by the placenta, the other twin or mother. When fetal death occurs after the first trimester, a fetus papyraceus can be formed (a "mummified" and compressed fetus). Vanishing twin syndrome occurs in 20-30% off all multifetal pregnancies and is often asymptomatic. Before high quality ultrasound exams in early pregnancy the syndrome was less frequent and often unnoticed.

        Which anomaly from previous posts can you notice here?`,
        imageUrl: vanishingTwin
    },{
        id: 'Narcolepsy',
        name: 'Narcolepsy',
        description: `Narcolepsy is a neurological sleep disorder and a subtype of central disorders of hypersomnolence. Hypersomnolence is excessive daytime sleepiness despite sufficient night-time sleep. According to DSM-5,narcolepsy is defined as recurrent episodes of an irrepressible need to sleep, lapses into sleep, or napping occuring within the same day. This should happen at least three times per week, with a period of three consecutive months. One of three minor criteria should also be met: catalepsy (sudden and uncontrollable muscle paralisys with a loss of contact with the environment), hypocretin protein deficiency and REM latency. Narcolepsy is confirmed by polysomnography followed by a multiple sleep latency test.`,
        imageUrl: narcolepsy
    },{
        id: 'Diogenes syndrome',
        name: 'Diogenes syndrome',
        description: `Diogenes syndrome is a psychiatric syndrome named after Diogenes, the ancient Greek philosopher who showed a lack of shame and lived in severe domestic squalor. The syndrome is characterized by the inability to ask for medical or social help, a pathological relationship to the body, society and objects. The last criterion may overlap with the hoarding disorder. The hoarding disorder is a subtype in obsessive compulsive spectrum disorders (OCD). It is characterized by difficulty to discard or part with possessions, usually objects. The result is the accumulation of objects and the congestion of living areas.`,
        imageUrl: diogenesSyndrome
    },{
        id: 'Bubble boy',
        name: 'Bubble boy',
        description: `Severe combined immunodeficiencies are a group of inherited disorders in which the differentiation and development of T and B lymphocytes are impaired. There are 8 subtypes based on phenotype and inheritance. Early infections, clinically manifested by diarrhea, pneumonitis, and failure to thrive, are often fatal. David Vetter, affectionately known as ‘The Boy in the Bubble’, was born in 1971 with severe combined immunodeficiency. Doctors failed to find a match for a blood marrow transplant, which resulted in keeping David inside a plastic sterile bubble to wait for a cure. Unfortunately, in 1984, he succumbed to the consequences of Burkitt’s lymphoma caused by an EBV infection, previously undetected, due to a bone marrow transplant. Aside from David, there have been several more cases of ‘bubble babies’, however David being the only one to endure 12 years in this environment. In the US, newborn screening programs have been widely accepted. Gene therapy, although still under clinical trial, could potentially be the cure to this disorder.`,
        imageUrl: bubbleBoy
    },{
        id: 'Blood type change',
        name: 'Blood type change',
        description: `ABO blood group antigenes are the most immunogenic antigenes determining a blood type. They are found on the surface of red blood cells. Although it was believed that a blood type is consistent (permanent) throughout a human’s life, it was reported that in both hematological and solid malignancies (e.g. bladder or lung carcinoma), a blood group can be changed. The loss of ABO antigenes is common in patients with leukemia, in which ABH antigenes are supressed or dimnisihed during the acute leukemic phase. Except blood type change in malignant conditions, research has identified enzymes which can convert other blood types to the “universal“ type O.
        
        Donate and support 'Krijesnica', @udrugakrijesnica, association for helping children and families facing malignant diseases: 
IBAN: HR3923600001101481616 (Croatia only)
http://krijesnica.hr/donacije (for international donations)`,
        imageUrl: bloodTypeChange
    },
];

export default diagnosesData;
