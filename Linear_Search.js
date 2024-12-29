// Find a specific value in a list by checking each element one by one.

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = ["sameer", "haseeb", "kabir", "attiq", "junaid"]
console.log(
  LinearSearch(arr, "junaid")
);

  