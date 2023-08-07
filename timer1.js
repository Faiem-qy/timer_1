// Get command line arguments
const args = process.argv.slice(2);

// Filter negative numbers and non numeric values
const validArgs = args.filter(time => !isNaN(time) && parseInt(time) >= 0);

// use map function to iterate each element in the args array
const alarms = validArgs.map(time => {
  // declare delay variable to reuse th time in milliseconds
  const delay = parseInt(time) * 1000;
  return delay;
});

// iterate each delay value in alarms array and use settimeout function to schedule a callback after the specified delay.
for (const delay of alarms) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`⏰⏰ Alarm at ${delay} milliseconds ⏰⏰`);
    //prints a string when the alarm has been executed
  }, delay);
}



