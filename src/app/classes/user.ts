export class User {
  private _name;
  private _picture;

  constructor(name, picture) {
    this._name = name;
    this._picture = picture;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get picture() {
    return this._picture;
  }

  set picture(value) {
    this._picture = value;
  }
}
