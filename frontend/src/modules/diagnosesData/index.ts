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
import autobrewery from './autobrewery.jpg';
import aspergerSyndrome from './aspergerSyndrome.jpg';
import parryRomberg from './parryRomberg.jpg';
import scleroderma from './scleroderma.jpg';
import covid from './covid.jpg';

export interface DiagnosisData {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    links: string[];
};

const diagnosesData: DiagnosisData[] = [
    {
        id: 'COVID-19',
        name: 'COVID-19',
        description: `COVID-19 is an abbreviation of the Coronavirus disease appearing in 2019 and caused by the SARS-CoV-2 coronavirus, belonging to the family Coronaviridae.

Coronaviruses are named for their crown-like spikes on the surface of the virus that attach and enter host cells. They appear to have originated in animals, however in some cases, can be transmitted to humans thus causing diseases with fatal respiratory conditions (SARS, MERS, COVID-19 infection). The first case of COVID-19 has been linked to a seafood market in Wuhan, China.

SARS-CoV-2 is being spread mainly through person-to-person contact. It is believed that the virus (twice as contagious as the seasonal flu) is transmitted by droplets either directly (by inhaling respiratory droplets) or indirectly (by touching contaminated surfaces where the virus can survive for several hours or even days). People are most contagious when they are sickest, however it is also possible to spread the virus during the asymptomatic period.

The main symptoms are fever (88.5%), cough (68.6%), myalgia or fatigue (35.8%), expectoration (28.2%) and dyspnea (21.9%). Although most infected patients (80%) quickly recover from the disease, the eldery and populations with chronic diseases are most vulnerable and in such patients, COVID-19 pneumonia can prove fatal.

There is currently (April 2020) no vaccine nor specific and targed drug treatments available. Management consists of supportive care.

Mortality rate from COVID-19 varies depending on individual country’s healthcare system and capacities, and is estimated to be 3,4% by the WHO (3/3/2020).  In order to decrease the number of cases and slow down the epidemic thus allowing healthcare systems to fight against the virus, it is strongly recommended to decrease and/or stop all unnecessary physical and social contact. Please read and follow the guidelines available below. 

If you suspect having COVID-19, please DO NOT visit your doctor, hospital or local emergency room. Instead, call 113. 
`,
        imageUrl: covid,
        links: [
            'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
            'https://zdravlje.gov.hr/UserDocsImages/2020%20CORONAVIRUS/plakat-za-javne-prostore-COVID.png',
            'http://koronavirus.hr/',
        ]
    },
    {
        id: 'Asperger Syndrome',
        name: 'Asperger Syndrome',
        description: `Asperger syndrome was first described in 1944 when Hans Asperger, an Austrian doctor described four children with “a lack of empathy, little ability to form friendships, one-sided conversation, intense absorption in one particular interest and clumsy movements.” They were each passionately interested in one narrow subject and would talk endlessly about one specific interest. Asperger called them “little professors” because of their ability to talk about their favourite subject in great detail.
        
According to disase clasification, Asperger syndrome is classified under the single umbrella term of autism spectrum disorder, which includes autism, Asperger syndrome and pervasive developmental disorders. 

Patients with Asperger's, in addition to restricted and repetitive patterns of behavior and interests, have impaired interaction and nonverbal communication with others, a limited understanding of other’s feelings. Most commonly, persons with Asperger's have an average level of intelligence, if not even above average levels.

It is important to identify Asperger syndrome as early as possible and start with multi-disciplinary treatment. Ignorance of Asperger syndrome can lead to failure in engagement with others socially, depression (especially by adolescents), stress, mood disorders and chronic frustration.

Please check out & donate:
https://udrugakorakdalje.hr/ 
HR9723400091110079093 (PBZ) `,
        imageUrl: aspergerSyndrome,
        links: [
            'https://hrcak.srce.hr/82962',
            'https://www.ncbi.nlm.nih.gov/m/pubmed/15124148/',
            'https://urn.nsk.hr/urn:nbn:hr:158:523571',
        ]
    },
    {
        id: 'Parry Romberg Syndrome',
        name: 'Parry Romberg Syndrome',
        description: `Parry Romberg Syndrome is a rare disorder characterized by atrophy of skin, subcutaneous tissue, muscles, and bones of one side of the face. The disease manifests at one point on the face and slowly progresses to the underlying structures and facial tissues. The etiology of Parry Romberg Syndrome is unknown. Some authors have suggested that it is a variant of frontal linear scleroderma with an autoimmune background. Neurological complications such as trigeminal neuralgia, seizures and migraines are common. Progression of facial atrophy is impossible to prevent, however with proper reconstructive and microsurgery interventions, contours of the face can be restored.
        
Check more about Scleroderma in the previous post.`,
        imageUrl: parryRomberg,
        links: [
            'https://www.ncbi.nlm.nih.gov/m/pubmed/30851754/',
            'https://www.sciencedirect.com/science/article/pii/S2214541918300245',
        ]
    },
    {
        id: 'Scleroderma',
        name: 'Scleroderma',
        description: `Scleroderma is an autoimmune multi-system disease characterized by fibrosis of the skin, and possible fibrosis of internal organs in addition to vasculopathy. 
        
Scleroderma can be classified into skin localized types and systemic sclerosis; with involment of renal, interstitial lung, diffuse gastrointestinal, and myocardial disease.

One of the early symptoms that requires monitoring is Raynaud's phenomenon, in which spasm of arteries causes episodes of discoloration in fingers and toes, after changes in temperature or emotions. It is often an indicator of the future onset of systemic scleroderma. Another symptom can be the significant impairment in the mimicry of the face which thus gives the appearence of a mask.

The sunflower is the international symbol for scleroderma as the sunflower turns towards the sun for warmth, smilar to people with scleroderma who usually achieve remission of symptoms in warmer weather.
        
More about turtles and sunflowers (Croatian Scleroderma Patients Association): http://huos.hr/udruga`,
        imageUrl: scleroderma,
        links: [
            'https://hrcak.srce.hr/188329',
            'https://www.ncbi.nlm.nih.gov/m/pubmed/29781586/',
            'https://www.ncbi.nlm.nih.gov/books/NBK537335/',
        ]
    },
    {
        id: 'Auto-brewery Syndrome',
        name: 'Auto-brewery Syndrome',
        description: `The condition known as auto-brewery syndrome is a rare medical condition in which ethanol is produced by carbohydrate fermentation in the gastrointestinal tract. Although a person did not or does not consume alcohol, ingested sugars are converted to ethanol in the patient's gut. The quantity of produced alcohol is high enough to cause symptoms which can be the same as someone that has been consuming alcohol.
        
Saccharomyces cervisiae is a yeast isolated in the GI system, most often causing the gut fermentation syndrome.

Auto-brewery syndrome is successfully treated by avoiding carbohydrate-rich food, antifungal therapy and probiotics.`,
        imageUrl: autobrewery,
        links: [
            'https://www.ncbi.nlm.nih.gov/books/NBK513346/',
        ]
    },
    {
        id: `Ondine's curse`,
        name: `Ondine's curse`,
        description: `A rare medical disorder in which autonomic nerve system and mechanisms of breathing control are impaired. Being awake, patients can consciously control their breathing, but if they fall asleep they stop breathing, which can lead to death. This condition in medical terminology is known as 'central alveolar hypoventilation syndrome but it's also called 'Ondine's curse'.
        
According to German fairy tale written by Fouque, Ondine or Undine was a mermaid who was betrayed by her man. Because he promised Ondine every waking breath, she cursed him, and when he fell asleep with another woman, he stopped breathing and died.`,
        imageUrl: ondinesCurse,
        links: [
            'https://www.ncbi.nlm.nih.gov/pubmed/29249648',
            'https://en.wikipedia.org/wiki/Central_hypoventilation_syndrome',
        ]
    },
    {
        id: 'Fregoli Syndrome',
        name: 'Fregoli Syndrome',
        description: `Capgras syndrome is a delusional neurologic disorder characterized by a belief that close family members or friends have been replaced by identical „doubles“.
    
The delusion was first described in 1923 when French psychiatrist Joseph Capgras observed a woman „Madame Macabre“ who claimed that imposters replaced her family members.

Fregoli syndrome is also a delusional misidentification syndrome where patients believe that different people are the same person who change appearances in order to trick them.`,
        imageUrl: fregoliSyndrome,
        links: [
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3828996/',
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2963468/',
        ]
    },
    {
        id: 'Polydactyly',
        name: 'Polydactyly',
        description: `The illustration shows a guitarist who has an extra finger on his hand. The condition is called polydactyly and can be often associated with other congenital anomalies. In this case middle fingers are duplicated and the same length.
        
There are both cases where the extra finger can be independently controlled, and the cases where this is not possible.`,
        imageUrl: polydactyly,
        links: [
            'https://www.ncbi.nlm.nih.gov/pubmed/27194607',
            'https://www.ncbi.nlm.nih.gov/pubmed/9526156',

            /* x-ray photo:  */'https://en.m.wikipedia.org/wiki/Polydactyly',
        ]
    },
    {
        id: 'Ehlers Danlos Syndrome',
        name: 'Ehlers Danlos Syndrome',
        description: `Gary Turner is the current holder of Guiness World Record for the stretchiest skin. He suffers from an extreme form of Ehlers Danlos syndrome.
        
Ehlers Danlos syndromes are a group of genetic disorders that affect the collagen in every part of the body.

Symptoms include hyperelastic skin, hypermobile joints, fragile blood vessels and abnormal scar formation. Complications can vary from mild, like loose joints, to severe like aortic dissection which can be fatal.

Question for you: Why the zebra on the image?`,
        imageUrl: ehlers,
        links: [
            'https://www.ncbi.nlm.nih.gov/m/pubmed/20847697/',
            'http://www.guinnessworldrecords.com/world-records/72387-stretchiest-skin',
        ]
    },
    {
        id: `Stoneman's disease`,
        name: `Stoneman's disease`,
        description: `Fibrodysplasio ossificans progressiva is a genetic condition in which muscles, ligaments and tendons are progressively replaced by bones. This disease, also known as Stoneman's disease, typically affects upper body skeleton and progresses downwards, but any minor muscle trauma can be a trigger for painful ossification. Abnormal extraskeletal ossifications in limb joints, jaw, and rib cage are limiting normal everyday physiological actions such as walking, speaking, eating and breathing. Unfortunately, surgical removal of an extraskeletal bone leads to uncontrolable formation of a new bone.`,
        imageUrl: stonemansDisease,
        links: [
            'https://www.ncbi.nlm.nih.gov/m/pubmed/18328989/?fbclid=IwAR3Cba4xobvCvx5Iqlrjz-SdXYPCtZganMpVTbDsiHV0NCWelueiUEpuTXE',
        ]
    },
    {
        id: 'Camel Girl',
        name: 'Camel Girl',
        description: `Congenital genu recurvatum, also called 'back knee deformity' is a rare condition in which the knee joint bends backwards. It is believed that the most common type is a result of uterine compression on abnormally hyperextended fetal knees during pregnancy.
        
The most famous case of genu recurvatum was the circus performer, Ella Harper. Because of the severe form of her condition she walked on all fours, resulting in her nickname 'The Camel girl'.

Today, most cases can be treated non-operatively, severe cases require surgical management.`,
        imageUrl: camelGirl,
        links: [
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3058203/',
            'https://hrcak.srce.hr/file/271737',
            'https://en.m.wikipedia.org/wiki/Ella_Harper',
        ]
    },
    {
        id: 'Lighting strike',
        name: 'Lighting strike',
        description: `Have you ever notice the skin of a lightning strike victim. These tree-like patterns are also known as Lichtenberg figures and appear when high voltage electrical discharges pass along the surface of insulating materials.`,
        imageUrl: lightingStrike,
        links: [
            'https://en.m.wikipedia.org/wiki/Lichtenberg_figure',
            'https://cit.srce.hr/index.php?show=clanak&id_clanak_jezik=87701&lang=en',
        ]
    },
    {
        id: 'Alice in Wonderland Syndrome',
        name: 'Alice in Wonderland Syndrome',
        description: `Alice in Wonderland syndrome, also known as Todd's syndrome is a neurological condition in which visual perception is damaged. This state causes that objects appear in different size than normal, closer or further away than they are. Patients can experience feelings that body parts are larger or smaller and symptoms of derealisation and depersonalisation.
        
It is speculated that writer Lewis Carroll described his own symptoms in the book "Alice's Adventures in Wonderland", where the main character felt same perceptual alterations.`,
        imageUrl: aliceInWonderland,
        links: [
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4909520/',
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5223006/',
        ]
    },
    {
        id: 'Vanishing twin syndrome',
        name: 'Vanishing twin syndrome',
        description: `Vanishing twin syndrome is a phenomenon in which one embryo disappears after documented fetal heart activity in multiple pregnancies. The disappearance usually occurs/happens in early pregnancy, as a consequence of fetal death (the cause is unknown) and the absorption of fetal tissue by the placenta, the other twin or mother. When fetal death occurs after the first trimester, a fetus papyraceus can be formed (a "mummified" and compressed fetus).
        
Vanishing twin syndrome occurs in 20-30% off all multifetal pregnancies and is often asymptomatic. Before high quality ultrasound exams in early pregnancy the syndrome was less frequent and often unnoticed.

Which anomaly from previous posts can you notice here?`,
        imageUrl: vanishingTwin,
        links: [
            'https://www.ncbi.nlm.nih.gov/m/pubmed/7170918/',
            'https://www.ncbi.nlm.nih.gov/m/pubmed/3524235/?i=3&from=/3047607/related',
        ]
    },
    {
        id: '65 Roses',
        name: '65 Roses',
        description: `Cystic Fibrosis is an inherited multisystem disease in which chloride channels of exocrine glands are dysfunctional. An abnormality of chloride permeability and inability to move water to the cell surface make bodily secretions salty and thick. Subsequently overgrowth of bacteria in the viscous secretions of the respiratory tract causes chronic and life-threatening pulmonary infections. Other characteristics of this disease are malnutrition due to exocrine pancreatic insufficiency, constipation, male infertility and elevation of chloride levels in a person's sweat.
        
The phrase „65 Roses“ for Cystic Fibrosis was created by Richard Weiss, who overheard his mother while she was making telephone calls seeking donations for CF research.`,
        imageUrl: _65roses,
        links: [
            'https://hrcak.srce.hr/139011',
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2137053/',
            /* '65 Roses story'  */
            'https://www.cff.org/About-Us/About-the-Cystic-Fibrosis-Foundation/The-65-Roses-Story/',
        ]
    },
    {
        id: 'Brittle Bone Disease',
        name: 'Brittle Bone Disease',
        description: `Osteogenesis imperfecta, colloquially known as "brittle bone disease", is a group of heritable genetic disorders, characterized by defects in connective tissue. The main symptom is extreme fragility of bones due to defects in collagen synthesis. Other manifestations may include blue sclerae, weak teeth, short statue, hearing loss and cardiorespiratory problems.
        
The disease consists of 13 types; type II is the most severe and lethal form.

Because of multiple fractures, osteogenesis imperfecta can be mistaken for child abuse.`,
        imageUrl: brittleBoneDisease,
        links: [
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5729682/'
        ]
    },
    {
        id: 'Narcolepsy',
        name: 'Narcolepsy',
        description: `Narcolepsy is a neurological sleep disorder and a subtype of central disorders of hypersomnolence. Hypersomnolence is excessive daytime sleepiness despite sufficient night-time sleep.
        
According to psychiatric manuals, narcolepsy is defined as recurrent episodes of an irrepressible need to sleep, lapses into sleep, or napping occuring within the same day. This should happen at least three times per week, with a period of three consecutive months. One of three minor criteria should also be met: catalepsy (sudden and uncontrollable muscle paralisys with a loss of contact with the environment), hypocretin protein deficiency and REM latency. Narcolepsy is confirmed by polysomnography followed by a multiple sleep latency test.`,
        imageUrl: narcolepsy,
        links: [
            'https://www.ncbi.nlm.nih.gov/books/NBK459236/',
            'https://www.psychiatry.org/psychiatrists/practice/dsm',
        ]
    },
    {
        id: 'Diogenes syndrome',
        name: 'Diogenes syndrome',
        description: `Diogenes syndrome is a psychiatric syndrome named after Diogenes, the ancient Greek philosopher who showed a lack of shame and lived in severe domestic squalor.
        
The syndrome is characterized by the inability to ask for medical or social help, a pathological relationship to the body, society and objects. The last criterion may overlap with the hoarding disorder. The hoarding disorder is a subtype in obsessive compulsive spectrum disorders (OCD). It is characterized by difficulty to discard or part with possessions, usually objects. The result is the accumulation of objects and the congestion of living areas.`,
        imageUrl: diogenesSyndrome,
        links: [
            'https://www.ncbi.nlm.nih.gov/m/pubmed/29145187/',
            'https://www.ncbi.nlm.nih.gov/m/pubmed/28686560/',
        ]
    },
    {
        id: 'Bubble boy',
        name: 'Bubble boy',
        description: `Severe combined immunodeficiencies are a group of inherited disorders in which the differentiation and development of T and B lymphocytes are impaired. There are 8 subtypes based on phenotype and inheritance. Early infections, clinically manifested by diarrhea, pneumonitis, and failure to thrive, are often fatal.
        
David Vetter, affectionately known as ‘The Boy in the Bubble’, was born in 1971 with severe combined immunodeficiency. Doctors failed to find a match for a blood marrow transplant, which resulted in keeping David inside a plastic sterile bubble to wait for a cure. Unfortunately, in 1984, he succumbed to the consequences of Burkitt’s lymphoma caused by an EBV infection, previously undetected, due to a bone marrow transplant.

Aside from David, there have been several more cases of ‘bubble babies’, however David being the only one to endure 12 years in this environment.

In the US, newborn screening programs have been widely accepted. Gene therapy, although still under clinical trial, could potentially be the cure to this disorder.`,
        imageUrl: bubbleBoy,
        links: [
            'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1905779/',
            'https://www.nejm.org/doi/10.1056/NEJMoa1815408',
            /* The story of David: */
            'https://primaryimmune.org/living-pi-explaining-pi-others/story-david',
        ]
    },
    {
        id: 'Blood type change',
        name: 'Blood type change',
        description: `ABO blood group antigenes are the most immunogenic antigenes determining a blood type. They are found on the surface of red blood cells. Although it was believed that a blood type is consistent (permanent) throughout a human’s life, it was reported that in both hematological and solid malignancies (e.g. bladder or lung carcinoma), a blood group can change. The loss of ABO antigenes is common in patients with leukemia, in which ABH antigenes are supressed or dimnisihed during the acute leukemic phase.
        
Except blood type change in malignant conditions, research has identified enzymes which can convert other blood types to the “universal“ type O.
        
Donate and support 'Krijesnica' (Instagram: @udrugakrijesnica), the association for helping children and families facing malignant diseases: 
IBAN: HR3923600001101481616 (Croatia only)
http://krijesnica.hr/donacije (for international donations)`,
        imageUrl: bloodTypeChange,
        links: [
            ' https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5242122/',
            'https://pubs.acs.org/doi/abs/10.1021/ja5116088',
        ]
    },
];

export default diagnosesData;
