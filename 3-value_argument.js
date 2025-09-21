#!/usr/bin/node

// process.argv[2] is the first real argument after "node" and the script name
const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
