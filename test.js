class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greeting = function () {
    return `hi, my name is ${this.name}, im ${this.age} years old`
  }
}

let Person2 = {
  name: "afina",
  age: 21,
  constructor: function (name, age) {
    this.name = name
    this.age = age
  },
  greeting: function () {
    return `hi, my name is ${this.name}, im ${this.age} years old`
  }
}
let person2 = new Person2("abdul", 22)
let person1 = new Person("irsyad", 21)
console.log(person2.greeting())