let day = "Thursday";
let alarm;

let person = {
  name: 'Mollie',
  age: 35,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7am'
};

person.hobbies = ['Kickboxing', 'Reading'];

if (day === "Saturday" || day === "Sunday") {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(person.hobbies);
