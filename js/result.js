function calcResults(userData) {
    let {
        experience, learning, time, budget, 
        needsDatabase, userData: needsAuth, realtime, 
        webComfort, frontFrameworkKnowledge, 
        languages, knowsSQL, bestDescDB, DBfamiliarity
    } = userData;

    let results = {
        frontend: '',
        backend: '',
        database: '',
        hosting: ''
    };

    //Step 0: Fix some unformatted data
    realtime = !realtime;
    needsDatabase = !needsDatabase;
    needsAuth = !needsAuth;
    knowsSQL = !knowsSQL;
    bestDescDB = !bestDescDB;
    languages = [
        'node.js', 'python', 'java', 'ruby', 'php'
    ][languages];


    //Step 1: Is project beginner or advanced
    let adv = realtime + needsDatabase + needsAuth > 1 &&
        (experience + 1) * (time + 1) > 2;
    console.log(`Adv: ${adv}`);
        
    //Step 2: Calculate frontend
    results.frontend = Object.entries(itemData.frontend)
        .reduce((prev, [key, val]) => {
            let formula = (learning * (1 + val.learningCurveBeg) * (1 + frontFrameworkKnowledge[key])) +
                (webComfort.HTML * (1 - val.htmlProf)) +
                (webComfort.JavaScript * (1 - val.jsProf));
            if(adv) formula = (learning * val.learningCurveAdv) +
                (webComfort.HTML * (1 - val.htmlProf)) +
                (webComfort.JavaScript * (1 - val.jsProf));
            console.log(prev, key, formula)
            if(formula > prev[1]) return [key, formula];
            if(formula == prev[1]
                && itemData.frontend[key].power > itemData.frontend[prev[0]].power)
                return [key, formula];
            return prev;
        }, [0, 0])[0];

    //Step 3: "Calculate" backend
    if(typeof itemData.backend[languages] == 'string') 
        results.backend = itemData.backend[languages]
    else {
        if(adv && typeof itemData.backend[languages].adv == 'object') 
            results.backend = itemData.backend[languages].adv[results.frontend]
        else if(adv) results.backend = itemData.backend[languages].adv
        else results.backend = itemData.backend[languages].beg;
    }

    //Step 5: Do hosting and database at the same time for some reason
    let needsServer = realtime ||
        (!['Next.js', 'Nuxt.js', 'SvelteKit'].includes(results.backend) &&
        results.backend == 'express' ? needsDatabase : true);
    let shouldBeSQL = 
        (bestDescDB && knowsSQL) ||
        (bestDescDB && learning >= 0.25);
    
    if(!needsDatabase && !needsServer) {
        results.database = 'none'
        results.hosting = 'github'
    } else {
        results.hosting = Object.entries(itemData.hosting)
            .filter(([key, val]) => val.server === needsServer)
            .filter(([key, val]) => {
                if(adv) return budget - val.advCost >= 0;
                return budget - val.cost >= 0; 
            })[0][0];

        if(shouldBeSQL) 
            if(needsServer) results.database = 'postgres'
            else results.database = 'cockroach'
        else if(needsServer) 
                if(adv) results.database = 'postgres'
                else results.database = 'redis'
            else if(results.hosting === 'firebase') results.database = 'firestore'
            else if(results.hosting === 'vercel') results.database = 'mongodb';
        
        if(DBfamiliarity[results.database] >= 0.33) true;
        else if(learning > 0) true;
        else {
            let myFavDBFam = Math.max(...Object.values(DBfamiliarity));
            let myFavDBs = Object.entries(DBfamiliarity)
                .filter(([key, val]) => val == myFavDBFam)
                .map(e => e[0]);

            if(myFavDBs.length === 1) {
                if(itemData.hosting[results.hosting].canSupport(myFavDBs[0])) 
                    results.database = myFavDBs[0]; 
            } else {
                for(let item of itemData.database[results.database]) {
                    if(myFavDBs.includes(item))
                        if(itemData.hosting[results.hosting].canSupport(myFavDBs)) {
                            results.database = item;
                        }
                }
            }
        }
    }

    createResultsPage(results);
}



function createResultsPage(results) {
    $('main').empty();
    
    let main = $(document.createElement('div'))
        .append('<h1 style="text-align: center;">Based on what you\'ve told us, we think your project\'s optimal tech stack would be:</h1>')
        .append(`<h2 style="text-align: center;">${Object.values(results).map(e => e[0].toUpperCase() + e.substring(1)).join(" + ").substring(-3)}</h2>`)
        .appendTo('main');
    
    let flog = $(document.createElement('div'))
        .addClass('flog')
        .append($(document.createElement('h3')).text("Here's why: "))
        .appendTo(main);

    for(let [name, value] of Object.entries(results)) {
        $(`<h2>${name[0].toUpperCase() + name.substring(1)}: ${value[0].toUpperCase() + value.substring(1)}</h2>`)
            .appendTo(flog);
        $(document.createElement('p'))
            .text(descriptions[value])
            .appendTo(flog)
    }


}

calcResults({
    "experience": 0.5,
    "learning": 0.5,
    "time": 0.5,
    "budget": 0,
    "needsDatabase": 0,
    "userData": 0,
    "realtime": 1,
    "webComfort": {
        "HTML": 0.6666666666666666,
        "CSS": 0.6666666666666666,
        "JavaScript": 1
    },
    "frontFrameworkKnowledge": {
        "react": 0.3333333333333333,
        "angular": 0,
        "vue": 0.6666666666666666,
        "svelte": 0.3333333333333333
    },
    "languages": 0,
    "knowsSQL": 0,
    "bestDescDB": 0,
    "DBfamiliarity": {
        "postgres": 0.3333333333333333,
        "cockroach": 0,
        "mongodb": 0,
        "firestore": 0.6666666666666666,
        "redis": 0.6666666666666666
    }
});