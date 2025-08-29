function FibViaRecursion(n) {
  if (n <= 1) return n; // if 0 => 0 ; 1 => 1

  return FibViaRecursion(n - 1) + FibViaRecursion(n - 2);
}

console.log([...Array(6).keys()].map(FibViaRecursion));

[...Array(6).keys()].map(FibViaRecursion).forEach(n => console.log(n));
