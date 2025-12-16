// Mile Pace
// Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

// Add leading zeros when needed.

function milePace(miles, duration) {
  console.log(miles, duration);
  // divide duration by miles
  // how do I handle the minutes and seconds?
  // turn minutes into seconds
  // split the duration string into an array
  const dur = duration.split(':');
  console.log(dur);
  // do I need to make them a number?
  let seconds = Number.parseInt(dur[0]) * 60 + Number.parseInt(dur[1]);
  console.log(seconds);
  let div = seconds / miles;
  console.log(div / 60);
  let minResult = div / 60;
  let secResult = (div / 60) % 60 === 0;
  console.log(minResult, secResult);
  //return miles;
  return `${minResult < 10 ? '0' + minResult : minResult}:${
    secResult === 0 ? '00' : secResult < 10 ? '0' + secResult : secResult
  }`;
}
