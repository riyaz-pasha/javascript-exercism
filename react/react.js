//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  value;
  constructor(value) {
    this.value = value
    this.children = []
  }

  setValue(value) {
    if(value===this.value) return;
    this.value = value
    this.children.forEach(childCell => childCell.update())
  }

  addChildren(childCell) {
    this.children.push(childCell)
  }
}

export class ComputeCell {
  value;
  _inputCells;
  _outputValueFn;

  constructor(inputCells, fn) {
    this._inputCells = inputCells;
    this._outputValueFn = fn;
    this.children = []
    this._callbacks = [];

    this._inputCells.forEach(inputCell => inputCell.addChildren(this));

    this.update();
  }

  update() {
    let newValue = this._outputValueFn(this._inputCells);
    if(newValue===this.value) return;
    this.value=newValue
    this.children.forEach(childCell => childCell.update())
    this._callbacks.forEach(callBackCell => callBackCell.newValue(this))
  }

  addChildren(childCell) {
    this.children.push(childCell)
  }

  addCallback(cb) {
    this._callbacks.push(cb);
  }

  removeCallback(cb) {
 this._callbacks=this._callbacks.filter(callBackCell=>callBackCell.uniqueId!==cb.uniqueId)
  }
}

export class CallbackCell {
  values;
  constructor(fn) {
    this.uniqueId = ++CallbackCell.prototype.uniqueId
    this.values = []
    this._callBackFn = fn
  }

  newValue(cell) {
    this.values.push(this._callBackFn(cell))
  }
}

  CallbackCell.prototype.uniqueId=0