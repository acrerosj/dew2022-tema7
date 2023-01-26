class SuperSelect extends HTMLElement {

  constructor(elements, name, key, value) {
    super();
    console.log(elements);
    let select = document.createElement('select');
    select.name = name;
    elements.forEach(e => {
      let option = document.createElement('option');
      option.value = e[key];
      option.textContent = e[value];
      select.append(option);
    });
    this.append(select);
  }
}

customElements.define('super-select', SuperSelect);

let select1 = new SuperSelect(PROVINCIAS, 'provincia', 'idProvincia', 'nombre');

let select2 = new SuperSelect(MUNICIPIOS, 'municipio', 'idMunicipio', 'nombre');
document.forms.formulario.insertAdjacentElement('afterbegin',select2);

document.forms.formulario.insertAdjacentElement('afterbegin',select1);