export default function convertHMS(value) {
  const ms = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(ms / 3600000); // get hours
  let minutes = Math.floor((ms - hours * 3600000) / 60000); // get minutes
  let seconds = ms - hours * 3600000 - minutes * 60000; //  get seconds
  // add 0 if value < 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds / 1000; // Return is HH : MM : SS
}
