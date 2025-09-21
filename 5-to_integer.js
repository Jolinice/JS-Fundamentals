#!/usr/bin/node

// Grab the first argument after the script name
const arg = process.argv[2];

// Convert to integer
const num = parseInt(arg, 10);

// Check if it's a valid number
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
