const ftoc = function(f) {
  let fAnswer = ((f - 32) * 1.8);
  return fAnswer.toFixed(1);
};

const ctof = function(c) {
  let cAnswer = ((c * 1.8) + 32);
  return cAnswer.toFixed(1);
};


//x°C ≘ (x × 1.8) + 32 °F	
//x°F ≘ (x − 32) × 1.8 °C

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
