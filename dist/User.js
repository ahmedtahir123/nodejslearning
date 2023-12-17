"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, address, username, password) {
        this._isLoggedIn = false;
        this._name = name;
        this._email = email;
        this._address = address;
        this._username = username;
        this._password = password;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    authenticate(username, password) {
        if (username === this._username && password === this._password) {
            this._isLoggedIn = true;
            console.log('User logged in successfully.');
        }
        else {
            console.log('Invalid username or password.');
        }
    }
    logout() {
        this._isLoggedIn = false;
        console.log('User logged out.');
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map