let myPlaces = ['Greece', 'Peru', 'Scotland'];
let friendPlaces = ['Ireland', 'Greece', 'China'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]);
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}