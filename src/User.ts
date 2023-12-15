
export  class User {

  private _name: string;
  private _email: string;
  private _address: string;

    constructor( name: string,  email: string,   address: string) {
       this._name = name;
       this._email = email;
       this._address =  address
    }

    get name(): string {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }

     get address(): string {
      return this._address;
    }

     set address(value: string) {
      this._address = value;
    }

     get email(): string {
      return this._email;
    }

     set email(value: string) {
      this._email = value;
    }
  
  
  }