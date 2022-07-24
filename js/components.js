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
}

div {
    display: inline-block;
}
`;

function ifImageExists(src, load) {
    let img = new Image();
    img.addEventListener('load', load);
    img.addEventListener('error', e => e.preventDefault());
    img.src = src;
}

class Select extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        $(document.createElement('style'))
            .text(stylesheet)
            .appendTo(shadow);
        
        let inc = 0;
        for(let {name, value} of this.attributes) {
            if(name.startsWith('item')) {
                let button = $(document.createElement('button'))
                    .addClass('selecter')
                    .attr('order', inc++)
                    .on('click', ({ target }) => {
                        if(target.tagName !== "BUTTON") target = target.parentElement;
                        $(target).siblings('.selected').removeClass('selected')
                        $(target).addClass('selected');
                    });

                ifImageExists(`../assets/${value.toLowerCase()}.png`,
                    () => {
                        $(document.createElement('img'))
                            .attr('src', `../assets/${value.toLowerCase()}.png`)
                            .attr('width', '50px')
                            .attr('height', '50px')    
                            .appendTo(button);
                    }, (e) => { e.preventDefault(); }
                );
                
                $(document.createElement('p'))
                    .text(value)
                    .appendTo(button);
                
                $(shadow).append(button);
            }
        }
    }
}

class SelectScale extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        $(document.createElement('style'))
            .text(stylesheet)
            .appendTo(shadow);

        let messages = ["None", "Basic", "Intermediate", "Advanced"];

        for(let {value: thing} of this.attributes) {
            let wrapper = $(document.createElement('div'))
                .addClass('row');

            let identifier = $(document.createElement('button'))
                .addClass('selecter')
                .appendTo(wrapper);

            
            ifImageExists(`../assets/${thing.toLowerCase()}.png`,
                () => {
                    $(document.createElement('img'))
                        .attr('src', `../assets/${thing.toLowerCase()}.png`)
                        .attr('width', '50px')
                        .attr('height', '50px')
                        .appendTo(identifier);
                }
            );

            $(document.createElement('p'))
                .text(thing)
                .appendTo(identifier);

            let inc = 0;
            for(let message of messages) {
                $(document.createElement('button'))
                    .addClass('selecter')
                    .text(message)
                    .attr('order', inc++)
                    .on('click', ({ target }) => {
                        if(target.tagName !== "BUTTON") target = target.parentElement;
                        $(target).siblings('.selected').removeClass('selected')
                        $(target).addClass('selected');
                    }).appendTo(wrapper);
            }
            
            $(shadow).append(wrapper);
        } 
    }
}

customElements.define('app-select', Select);
customElements.define('app-selectscale', SelectScale);