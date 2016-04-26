function fizzBuzzWoof(i) {
  var string = i + ""; 
  if(divisibleBy(i, 7) || string.includes("7")) {
    if(divisibleBy(i, 5) || string.includes("5")) {
      if(divisibleBy(i, 3) || string.includes("3")) {
        return "fizzbuzzwoof";
      }
    }
  }
  if(divisibleBy(i, 7) || string.includes("7")) {
    if(divisibleBy(i, 5) || string.includes("5")) {
      return "buzzwoof";
    }
  }
  if(divisibleBy(i, 3) || string.includes("3")) {
    if(divisibleBy(i, 5) || string.includes("5")) {
      return "fizzbuzz";
    }
  }
  if(divisibleBy(i, 7) || string.includes("7")) {
    if(divisibleBy(i, 3) || string.includes("3")) {
      return "fizzwoof";
    }
  }
  if(divisibleBy(i, 3) || string.includes("3")) {
    return "fizz";
  }
  if(divisibleBy(i, 5) || string.includes("5")) {
    return "buzz";
  }
  if(divisibleBy(i, 7) || string.includes("7")) {
    return "woof";
  }
  return i;
}

function divisibleBy(num, divisor) {
  return num % divisor === 0;
}