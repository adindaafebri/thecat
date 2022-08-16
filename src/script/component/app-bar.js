class Appbar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                padding: 16px;
                width: 100%;
                background-color: #f7cac9;
                color: #7486a7;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                text-align: center;
            }
            h2{
                padding: 16px;
            }
        </style>
        
        <h2>The Cat</h2>
      `;
    }
}

customElements.define('app-bar', Appbar);