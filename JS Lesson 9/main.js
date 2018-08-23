let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};
