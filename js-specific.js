class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone = "1234567890", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { age: 10, phone: "1111", address: new Address("1", "Main Street") });

console.log(user);



