const ftoc = function(f) {
  let fAnswer = ((f - 32) * 5/9);
  fAnswer = fAnswer.toFixed(1);
  return +fAnswer;
};

const ctof = function(c) {
  let cAnswer = ((c * (9/5)) + 32);
  cAnswer = cAnswer.toFixed(1);
  return +cAnswer;
};


//x°C ≘ (x × 1.8) + 32 °F	
//x°F ≘ (x − 32) × 1.8 °C

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
