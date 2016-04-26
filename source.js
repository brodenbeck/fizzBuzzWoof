function fizzBuzzWoof(i) {
  var string = i + ""; 
    
  for(i = 1; i < 101; i++) {

    if(divisibleBy(i, 7) || string.includes("7")) {
      if(divisibleBy(i, 5) || string.includes("5")) {
        if(divisibleBy(i, 3) || string.includes("3")) {
          console.log("fizzbuzzwoof");
        }
      }
    }
    
    if(divisibleBy(i, 7) || string.includes("7")) {
      if(divisibleBy(i, 5) || string.includes("5")) {
        console.log("buzzwoof");
      }
    }
    
    if(divisibleBy(i, 3) || string.includes("3")) {
      if(divisibleBy(i, 5) || string.includes("5")) {
        console.log("fizzbuzz");
      }
    }
    
    if(divisibleBy(i, 7) || string.includes("7")) {
      if(divisibleBy(i, 3) || string.includes("3")) {
        console.log("fizzwoof");
      }
    }
    
    if(divisibleBy(i, 3) || string.includes("3")) {
      console.log("fizz");
    }
    
    if(divisibleBy(i, 5) || string.includes("5")) {
      console.log("buzz");
    }
    
    if(divisibleBy(i, 7) || string.includes("7")) {
      console.log("woof");
    }
    
    console.log(i);
  }
}

function divisibleBy(num, divisor) {
  return num % divisor === 0;
}

fizzBuzzWoof();