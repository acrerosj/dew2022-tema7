class ButtonList extends HTMLElement {
  constructor() {
    super();
    let elements = this.getAttribute('elements').split(' ');
    console.log(elements);
    elements.forEach(element => {
      let button = document.createElement('button');
      button.textContent = element;
      button.addEventListener('click', ()=>this.getDetails(element));
      this.appendChild(button);
    });
    let details = document.createElement('div');
    details.textContent="pulsa algún boton";
    this.appendChild(details);
    this.details = details;
  }

  getDetails(text) {
    //let details = this.querySelector('div');
    fetch("files/"+text+".txt")
    .then(res=>res.text())
    .then(text => this.details.innerHTML = text);
  }
}


customElements.define('button-list', ButtonList);