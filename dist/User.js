"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, address) {
        this._name = name;
        this._email = email;
        this._address = address;
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
}
exports.User = User;
//# sourceMappingURL=User.js.map