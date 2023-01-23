class group {
  constructor() {
    this._groupset = [];
  }
  add(elem) {
    for (let i = 0; i < this._groupset.length; i++) if (elem === this._groupset[i]) return;
    this._groupset.push(elem);
  }
  delete(elem) {
    let indextoremove = this._groupset.indexOf(elem);
    this._groupset.splice(indextoremove, 1);
  }
  has(elem) {
    for (let i = 0; i < this._groupset.length; i++) if (elem === this._groupset[i]) return true;
    return false;
  }
}
