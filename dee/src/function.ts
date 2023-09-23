
let RANDOM = (min?: number, max?: number) => {
    max = max === undefined ? 100 : max;
    min = min === undefined ? 1 : min;
  
    return Math.floor(Math.random() * (max - min)) + min;
  };
  

export {RANDOM}
  