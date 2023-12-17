
export  class User {

  private _name: string;
  private _email: string;
  private _address: string;
  private _username: string;
  private _password: string;
  private _isLoggedIn: boolean = false

    constructor( name: string,  email: string,   address: string, username: string, password: string, ) {
       this._name = name;
       this._email = email;
       this._address =  address;
       this._username = username;
       this._password = password;
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


    authenticate(username: string, password: string): void {
      if (username === this._username && password === this._password) {
        this._isLoggedIn = true;
        console.log('User logged in successfully.');
      } else {
        console.log('Invalid username or password.');
      }
    }

    logout(): void {
      this._isLoggedIn = false;
      console.log('User logged out.');
    }
  
  
  }