let day = "Thursday";
let alarm;

let person = {
  name: 'Mollie',
  age: 35,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7am',
  sayHello: () => {
    return('Hello, there!');
  },
  sayGoodbye() {
    return("Goodbye!");
  }
};

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
