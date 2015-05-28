describe("countUp", function(){
  it("will take a number and a divisor and increment up", function(){
  expect(countUp(30, 5)).to.eql([5, 10, 15, 20, 25, 30])
  expect(countUp(10, 5)).to.eql([5, 10])
  expect(countUp(82, 9)).to.eql([9,18,27,36,45,54,63,72,81])
});



});
