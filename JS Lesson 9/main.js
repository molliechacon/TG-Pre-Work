let day = "Thursday";
let alarm;

let person = {
  name: 'Mollie',
  age: 35,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7am',
  sayHello: () => {
    // COULD NOT GET THIS.NAME TO WORK!!! SOMEHOW, PERSON.NAME WORKS JUST FINE.
    return(`Hello, my name is ${this.name}`);
  },
  sayGoodbye() {
    return("Goodbye!");
  }
};

let friend = {
  name: 'Sundi'
};

friend.sayHello = person.sayHello;

person.hobbies = ['Kickboxing', 'Reading'];
person.hobbies = ['Knitting'];

if (day === "Saturday" || day === "Sunday") {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(person.sayGoodbye());
console.log(friend.sayHello());