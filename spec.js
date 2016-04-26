describe("FizzBuzzWoof", function() {
  it("should return 1 when passed 1", function() {
    expect(fizzBuzzWoof(1)).toBe(1);
  });
  
  it("should return 2 when passed 2", function() {
    expect(fizzBuzzWoof(2)).toBe(2);
  });
  
  it("should return fizz when passed 3", function() {
    expect(fizzBuzzWoof(3)).toBe("fizz");
  });
  
  it("should return fizz when passed 6", function() {
    expect(fizzBuzzWoof(6)).toBe("fizz");
  });
  
  it("should return buzz when passed 5" , function() {
    expect(fizzBuzzWoof(5)).toBe("buzz");
  });
  
  it("should return buzz when passed 10" , function() {
    expect(fizzBuzzWoof(10)).toBe("buzz");
  });
  
  it("should return woof when passed 7" , function() {
    expect(fizzBuzzWoof(7)).toBe("woof");
  });
  
  it("should return woof when passed 14" , function() {
    expect(fizzBuzzWoof(14)).toBe("woof");
  });
  
  it("should return fizzbuzz when passed 15" , function() {
    expect(fizzBuzzWoof(15)).toBe("fizzbuzz");
  });
  
  it("should return fizzwoof when passed 21" , function() {
    expect(fizzBuzzWoof(21)).toBe("fizzwoof");
  });
  
  it("should return buzzwoof when passed 70" , function() {
    expect(fizzBuzzWoof(70)).toBe("buzzwoof");
  });
  
  it("should return fizzbuzzwoof when passed 105" , function() {
    expect(fizzBuzzWoof(105)).toBe("fizzbuzzwoof");
  });
  
  it("should return fizz when passed 13" , function() {
    expect(fizzBuzzWoof(13)).toBe("fizz");
  });
  
  it("should return woof when passed 71" , function() {
    expect(fizzBuzzWoof(71)).toBe("woof");
  });
  
  it("should return fizzbuzzwoof when passed 357" , function() {
    expect(fizzBuzzWoof(357)).toBe("fizzbuzzwoof");
  });
  
  it("should return fizzbuzzwoof when passed 53" , function() {
    expect(fizzBuzzWoof(53)).toBe("fizzbuzz");
  });
  
  it("should return fizzbuzz when passed 51" , function() {
    expect(fizzBuzzWoof(51)).toBe("fizzbuzz");
  });
  
  it("should return fizzbuzz when passed 72" , function() {
    expect(fizzBuzzWoof(72)).toBe("fizzwoof");
  });
  
  it("should return fizzbuzzwoof when passed 75" , function() {
    expect(fizzBuzzWoof(75)).toBe("fizzbuzzwoof");
  });
});