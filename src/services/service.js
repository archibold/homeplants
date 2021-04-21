import firebase from "gatsby-plugin-firebase";

let data = [];
const flowerName = ['Nana', 'Nene', 'Nini', 'Nono', 'Nunu', 'Nyny', 'Adam', 'Ewa', 'Olka', 'Tropik', 'Stary', 'Radosc', 'Afro', 'Bracia', 'Wielki', 'Freak'];

export async function init() {
  return firebase
    .database()
    .ref("/plants")
    .once("value")
    .then(snapshot => {
      var val = snapshot.val();
      data = val;
    });
}

export function getFlowerSeries(flowerIndex) {
  return Object.keys(data).map((serie, index) => {
    return {
      name: flowerName[flowerIndex-1],
      x: (new Date(parseInt(data[serie].time) * 1000)),
      y: data[serie].data[flowerIndex]
    };
  } );
}

export function getFlowersData() {
  let arr = [];
  for(var i=0; i < flowerName.length; i++) {
    arr.push({
      name: flowerName[i],
      humidity: data[Object.keys(data)[Object.keys(data).length-1]].data[i+1]
    })
  }
  return arr;
}
