let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
      console.log("New age is valid");
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }
};

person.age = 39;
