// get the list of fibonacci sequence until a specified number
let fib = (n) => {
  let x = 0,
    y = 1,
    nextNum = x + y,
    arr = [];
  while (x < n) {
    arr.push(x);
    x = y;
    y = nextNum;
    nextNum = x + y;
  }

  console.log(arr);
};
fib(50);


// get the list of fibonacci sequence of a specified number
let fib2 = n => {
  let arr = [0, 1]

  for(let i = 2; i<n; i++) {
    arr[i] = arr[i-1] + arr[i-2]
  }

  console.log(arr)
}

fib2(50)
