// Code your solution in this file!

const headquarters = 42;
function distanceFromHqInBlocks(street) {
  if (street > 42) {
    let distanceFromHqInBlocks = street - headquarters;
    return distanceFromHqInBlocks;
  } else {
    let distanceFromHqInBlocks = headquarters - street;
    return distanceFromHqInBlocks;
  }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);



function distanceFromHqInFeet(value) {
  let distanceFromHqInFeet = distanceFromHqInBlocks(value) * 264;
  return distanceFromHqInFeet;
}
distanceFromHqInFeet(value);


function distanceTravelledInFeet(start, destination) {
  if (start > 42) {
    let distanceTravelledInFeet = (destination - start) * 264;
    return distanceTravelledInFeet;
  } else {
    let distanceTravelledInFeet = (start - destination) * 264;
    return distanceTravelledInFeet;
  }
}
distanceTravelledInFeet();


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
calculatesFarePrice();