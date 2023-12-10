
export  class User {

    constructor(public name: string, public email: string,  public address: string) {}
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    setAddress(address: string): void {
      this.address = address;
    }
  }