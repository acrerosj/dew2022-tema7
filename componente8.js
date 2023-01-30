class SpanCount extends HTMLElement {

  constructor(value = 0) {
    super();
    this.value = this.getAttribute('value') || value;
  }

  get value() { return this.getAttribute('value'); }
  set value(v) { this.setAttribute('value',v); }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(name,old,now) {
    switch(name) {
      case 'value' :
        console.log(name, old, now);
        if (now>=0) this.innerHTML = now;
        else now = old;
        break;
    
    }
  }
}

customElements.define('span-count', SpanCount);

let spancount1  = document.querySelector('span-count');
let spancount2 = new SpanCount(8);
document.body.append(spancount2);
document.body.append(new SpanCount());