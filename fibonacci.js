function fibonacci(n) {
  let a = 0;
  let b = 1;
  let temp;

  console.log(a);
  console.log(b);

  for (let i = 3; i <= n; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}

fibonacci(20);
