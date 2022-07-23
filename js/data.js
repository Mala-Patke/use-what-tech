const itemData = {
    frontend: {
        html: {
            learningCurveBeg: 0.1,
            learningCurveAdv: 0.1,
            power: 0.3,
            htmlProf: 1,
            jsProf: 0.4
        },
        react: {
            learningCurveBeg: 0.6,
            learningCurveAdv: 0.8,
            power: 0.9,
            htmlProf: 0.4,
            jsProf: 0.8
        }, 
        angular: {
            learningCurveBeg: 0.7,
            learningCurveAdv: 0.7,
            power: 0.6,
            htmlProf: 0.9,
            jsProf: 0.4
        },
        vue: {
            learningCurveBeg: 0.5,
            learningCurveAdv: 0.9,
            power: 0.7,
            htmlProf: 0.5,
            jsProf: 0.7
        },
        svelte: {  
            learningCurveBeg: 0.3,
            learningCurveAdv: 0.6,
            power: 0.6,
            htmlProf: 0.4,
            jsProf: 0.8
        },
    },
    backend: {
        python: {
            django: {
                learningCurve: 0.7,
                power: 0.8
            },
            flask: {
                learningCurve: 0.3,
                power: 0.4
            }
        }
    },
    database: {
        
    },
    hosting: {

    }
};

const questionData = [
    /*{ //TEMPLATE: DELETE LATER
        question: '',
        answerType: '',
        options: [], 
        manipulator: ''
    }, //*/
    {
        question: 'How much programming experience do you have?',
        answerType: 'select',
        options: [
            'Very little', 'Some', 'A moderate amount', 'A good amount', 'A lot'
        ], 
        manipulator: 'experience'
    },
    {
        question: 'How open are you to learning new technologies?',
        answerType: 'select',
        options: [
            "I'd rather not", "I'm hesitant to", "No preference", "I would like to", "I really would like to"
        ], 
        manipulator: 'learning'
    },
    {
        question: 'Approximately how much time do you have for this project?',
        answerType: 'select',
        options: [
            '1-2 days', '1-2 weeks', '1-2 months', '5-6 months', 'longer'
        ], 
        manipulator: 'time'
    },
    {
        question: 'Which option is closest to your budget for this project?',
        answerType: 'select',
        options: [
            '$0/month', '$5/month', '$20/month', '$100/month'
        ], 
        manipulator: 'budget'
    },
    {
        question: 'Will your app need to store data that can be accessed among multiple clients?',
        answerType: 'select',
        options: [
            'yes', 'no'
        ], 
        manipulator: 'needsDatabase'
    },
    { 
        question: 'Will your app need to authenticate users?',
        answerType: 'select',
        options: [
            'yes', 'no'
        ], 
        manipulator: 'userData'
    },
    {
        question: 'Will your app require updates to be displayed in real time?',
        answerType: 'select',
        options: [
            'yes', 'no'
        ], 
        manipulator: 'realtime'
    },
    { 
        question: 'How comfortable are you with the following languages',
        answerType: 'selectscale',
        options: [
            'HTML', 'CSS', 'JavaScript'
        ],
        manipulator: 'webComfort'
    },
    { 
        question: 'How familiar are you with the following frameworks?',
        answerType: 'selectscale',
        options: [
            'React', 'Angular', 'Vue', 'Svelte'
        ], 
        manipulator: 'frontFrameworkKnowledge'
    },
    { 
        question: 'Select the language you are most comfortable with',
        answerType: 'select',
        options: [
            'Node.js', 'Python', 'Java', 'Ruby', 'PHP'
        ], 
        manipulator: 'languages',
    },
    { 
        question: 'Do you know SQL?',
        answerType: 'select',
        options: [
            'yes', 'no'
        ], 
        manipulator: 'knowsSQL'
    },
    { 
        question: 'Which better describes your app?',
        answerType: 'select',
        options: [
            'Lots of reads, fewer writes', 'Lots of writes, fewer reads', 'Unsure'
        ], 
        manipulator: 'bestDescDB',
    },
    { 
        question: 'How familiar are you with the following technologies?',
        answerType: 'selectscale',
        options: [
            'Postgres', 'Cockroach', 'MongoDB', 'Firestore', 'Redis'
        ], 
        manipulator: 'DBfamiliarity'
    },
];