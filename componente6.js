class SuperSelectDuplex extends HTMLElement {
  master;
  #details;

  constructor(elementsMaster, elementsDetails, name, keyMaster, valueMaster, keyDetails, valueDetails) {
    super();
    this.elementsDetails = elementsDetails;
    this.keyMaster = keyMaster;
    this.keyDetails = keyDetails;
    this.valueDetails = valueDetails;

    let selectMaster = document.createElement('select');
    elementsMaster.forEach(element => {
      let option = document.createElement('option');
      option.value = element[keyMaster];
      option.textContent = element[valueMaster];
      selectMaster.append(option);
    });
    selectMaster.addEventListener('change', ()=>this.putOptionsDetails());
    this.append(selectMaster);
    this.master = selectMaster;

    let selectDetails = document.createElement('select');
    selectDetails.name = name;
    this.append(selectDetails)
    this.#details = selectDetails;
    this.putOptionsDetails();
  }

  putOptionsDetails() {
    this.#details.innerHTML = '';
    let elementsDetailsFilter = this.elementsDetails.filter(e => e[this.keyMaster]==this.master.value);
    elementsDetailsFilter.forEach(element => {
      let option = document.createElement('option');
      option.value = element[this.keyDetails];
      option.textContent = element[this.valueDetails];
      this.#details.append(option);
    });
  }

  get value() {
    return this.#details.value;
  }
}

customElements.define('super-select-duplex', SuperSelectDuplex);

let select1 = new SuperSelectDuplex(PROVINCIAS, MUNICIPIOS, 'municipio', 'idProvincia', 'nombre', 'idMunicipio', 'nombre');

document.forms.formulario.insertAdjacentElement('afterbegin',select1);

