#!/usr/bin/node

const size = Number(process.argv[2]);

if (!Number.isInteger(size) || size < 1) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
