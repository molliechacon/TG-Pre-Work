const newYearsResolutions = ['diet', 'work out', 'get more sleep'];

const listItem = newYearsResolutions[0];
newYearsResolutions[1] = 'Learn a new language';
newYearsResolutions.push('volunteer more', 'get another dog');
newYearsResolutions.pop();

console.log(newYearsResolutions);
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
console.log(newYearsResolutions.length);