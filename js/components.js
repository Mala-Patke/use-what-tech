const stylesheet = `
.selecter {
    border-radius: 0px;
    background-color: white;
    margin: 0px 20px;
    border: 2.5px solid black;
    width: 100px;
    height: 100px;
}

.selected {
    background-color: #68c5ff7a;
}`;

function ifImageExists(src, load, error) {
    let img = new Image();
    img.addEventListener('load', load);
    img.addEventListener('error', error);
    img.src = src;
}

class Select extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        for(let {name, value} of this.attributes) {
            if(name.startsWith('item')) {
                let button = $(document.createElement('button'))
                    .addClass('selecter')
                    .on('click', ({ target }) => {
                        if(target.tagName !== "BUTTON") target = target.parentElement;
                        $(target).siblings('.selected').removeClass('selected')
                        $(target).addClass('selected');
                    });

                ifImageExists(`../assets/${value.toLowerCase()}.png`,
                    () => {
                        $(document.createElement('img'))
                        .attr('src', `../assets/${value.toLowerCase()}.png`)
                        .appendTo(button);    
                    }, (e) => { e.preventDefault(); }
                );
                
                $(document.createElement('p'))
                    .text(value)
                    .appendTo(button);
                
                $(document.createElement('style'))
                    .text(stylesheet)
                    .appendTo(shadow);
                    

                $(shadow).append(button);
            }
        }
    }
}

customElements.define('app-select', Select);