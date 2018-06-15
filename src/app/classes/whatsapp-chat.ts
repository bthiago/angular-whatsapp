export class WhatsappChat {
  private _picture: string;
  private _name: string;
  private _time: Date;
  private _lastMessage: string;

  constructor(picture: string, name: string, time: Date, lastMessage: string) {
    this._picture = picture;
    this._name = name;
    this._time = time;
    this._lastMessage = lastMessage;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get time(): Date {
    return this._time;
  }

  set time(value: Date) {
    this._time = value;
  }

  get lastMessage(): string {
    return this._lastMessage;
  }

  set lastMessage(value: string) {
    this._lastMessage = value;
  }
}
