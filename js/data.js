const itemData = {
    frontend: {
        html: {
            learningCurveBeg: 0.1,
            learningCurveAdv: 0.1,
            power: 0.3,
            htmlProf: 0.7,
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
        'node.js': {
            beg: 'express',
            adv: {
                html: 'express',
                react: 'Next.js',
                angular: 'express',
                vue: 'Nuxt.js',
                svelte: 'SvelteKit'
            }
        },
        python: {
            beg: 'Flask',
            adv: 'Django'
        },
        java: 'Spring',
        ruby: 'Rails',
        php: 'Laravel'
    },
    database: {
        postgres: ['cockroach', 'mongodb', 'firestore', 'redis'],
        cockroach: ['postgres', 'mongodb', 'firestore', 'redis'],
        mongodb: ['firestore', 'redis', 'cockroach', 'postgres'],
        firestore: ['mongodb', 'redis', 'cockroach', 'postgres'],
        redis: ['firestore', 'mongodb', 'cockroach', 'postgres']
    },
    hosting: {
        VPS: {
            server: true,
            canSupport: ['postgres', 'redis', 'mongodb'],
            cost: 0.5,
            advCost: 0.75 
        },
        heroku: {
            server: true,
            canSupport: ['postgres', 'redis', 'mongodb'],
            cost: 0,
            advCost: 0
        }, 
        vercel: {
            server: false,
            canSupport: ['mongodb', 'cockroach'],
            cost: 0,
            advCost: 0
        }, 
        firebase: {
            server: false,
            canSupport: ['firestore'],
            cost: 0,
            advCost: 0.5
        }, 
        github: {
            server: false,
            canSupport: ['none'],
            cost: 0,
            advCost: 0
        }, 
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
            'react', 'angular', 'vue', 'svelte'
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
            'postgres', 'cockroach', 'mongodb', 'firestore', 'redis'
        ], 
        manipulator: 'DBfamiliarity'
    },
];

const descriptions = {
    'html': "Good ol HTML. While HTML isn't as powerful as other Javascript UI libraries, it's quick, simple, and very easy to learn. In combination with libraries like JQuery and Tailwind, HTML is able to produce excellent results",
    'react': "React is one of the most popular UI libraries among developers, and for good reason. React helps you build robust, interactive, and dynamic sites with extreme ease.",
    'angular': "Angular specializes in turning HTML-based documents into dynamic and rapidly updating models and views. It's ease of use and building upon traditional HTML make it an excellent choice for developing your apps.",
    'vue': "Vue.js prides itself in being a much more compact version of the other complex UI frameworks that take up the market that prides itself in being the fastest of them all. It is easy to learn, yet hard to master.",
    'svelte': "Svelte is one of the newest UI libraries and is quickly gaining popularity. It's already been described as one of the most loved frameworks in recent StackOverflow survey. This is due to it simplifying many of the more complex or boilerplate-y features of other libraries.",
    'express': "Express is the best tool to set up general webservers using just Node.js. It is extremely simple and has support for static files, server-side rendering, websockets, and more.",
    'Next.js': "Next.js is the easiest way to get your multi-page react app on the web. Features such as smart bundling, route pre-fetching, and serverless support make it the preferred backend framework for most react apps.",
    'Nuxt.js': "Nuxt.js is the easiest way to get your multi-page vue app on the web. Features such as auto-import, automatic code splitting, and it's module system complete with over 160 different libraries and plugins make the development process for vue apps as easy as can be.",
    'SvelteKit': "While SvelteKit is still very new, it's impact on developing with Svelte cannot be understated. Its hot module reloading makes building it extremely fast and revolutionary. ",
    'Flask': "Flask is one of the best ways to get started with web development from Python. It's extremely simple and easy to learn, yet can be extensible if need be in the future. Flask gives the developer a lot of freedom by remaining as lightweight as it needs to be.",
    'Django': "Django is the most popular python library for setting up webservers. While it is relatively complex, it makes up for it with an abundance of features to make web development a breeze, such as a built in ORM.",
    'Spring': "Spring is the most popular Java library for web application development. It's approach of serverless microservicing makes it extremely fast and reactive. Additionally, its event driven architecture makes it very simple to program with",
    'Rails': "Ruby on Rails powers some of the largest apps on the web, including github, hulu, soundcloud, and more. It compresses the complexity of modern web apps, making it very easy to scale.",
    'Laravel': "Laravel is a web application framework that specializes in expressive and elegant syntax. It is super easy to learn and get coding in right away, and offers lots of built in support for large and small apps alike.",
    'postgres': "Postgres is widely considered one of the most reliable SQL databases in the modern age. It improves upon traditional SQL through features such as custom data types, functions, and other language support.",
    'cockroach': "CockroachDB is the serverless SQL solution that prides itself in being able to scale infinitely through its cloud based model. Its global low-latency and consistent SQL patterns make it an excellent choice for your database.",
    'mongodb': "MongoDB is one of the worlds most popular NoSQL solutions. Its popular document-oriented-datamodel is very easy to use as a beginner or an expert. It offers complex querying features while still keeping its interface simple.",
    'firestore': "Firestore is Google Firebase's NoSQL solution. The document-oriented model it uses is very familiar and easy to pick up, as well as collaboration with all of Google's APIs and Libraries, coupling to make a very solid database solution.", 
    'redis': "Redis is pretty cool.",
    'VPS': "A VPS is pretty cool",
    'heroku': "Heroku is pretty cool",
    'vercel': "Salesforce is pretty cool",
    'firebase': "Firebase Hosting is pretty cool",
    'github': "Github Pages is pretty cool"
}