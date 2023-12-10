"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map