const prompt = $('#prompt');
const selections = $('#selections');
const both = $('#prompt, #selections');

let userData = {};

const answerTypeHandlers = {
    select(manipulator) {
        let root = selections.children()[0].shadowRoot;
        userData[manipulator] = $(root).children('.selected').attr('order') / ($(root).children().length - 2);
    },

    selectscale(manipulator) {
        let root = selections.children()[0].shadowRoot;
        console.log('hola como estas')
        let obj = {};
        for(let child of Array.from(root.children)) {
            if(child.tagName !== "DIV") continue;
            obj[$(child).children()[0].textContent] = $(child).children('.selected').attr('order') / ($(child).children().length - 2);
        }
        userData[manipulator] = obj;
    }
};

function awaitButtonPress() {
    return new Promise((res, rej) => {
        $('#next').on('click', res);
    });
}

function fade(elem, duration) {
    return new Promise((res, rej) => {
        elem.fadeToggle(duration, res);
    });
}

async function main() {
    $('#init').remove();
    $('#next').removeAttr('hidden')

    await fade(both, 500);

    for(let q of questionData) {
        console.log(q);
        //Empty
        both.empty();

        //Load
        prompt.append(`<h1>${q.question}</h1>`);
        selections.append(`<app-${q.answerType} ${q.options.length ? q.options.map((e, i) => `item${i}="${e}"`).join(" ") : ''}></app-${q.answerType}>`);
        await fade(both, 500);
        
        //Wait for selection
        await awaitButtonPress();

        //Add appropriate data to userData
        
        try { answerTypeHandlers[q.answerType](q.manipulator); } catch {}

        //Fade out
        await fade(both, 500);
    }

    await fade($('#next'), 200);
    calcResults(userData);
}

$('#init').on('click', main);