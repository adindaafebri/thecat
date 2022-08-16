class CatItem extends HTMLElement {
    constructor (){
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set cat(cat){
        this._cat = cat;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `<style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
         {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .cat-image {
          width: 50%;
           display: block;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cat-info {
          padding: 24px;
        }
        
        .cat-info > h2 {
          text-align: center;
          font-weight: lighter;
        }
        
        .cat-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>

          <img class="cat-image" src="${this._cat.url}" alt="Cat Image">
          <div class="cat-info">
            <p>${this._cat.id}</p>
            <p>${this._cat.width}</p>
            <p>${this._cat.height}</p>
          </div>
        `;
    }
}

customElements.define('cat-item', CatItem);