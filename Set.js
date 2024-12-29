// A collection of unique elements. 

const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate, won't be added
console.log(set); // Set { 1, 2 }
