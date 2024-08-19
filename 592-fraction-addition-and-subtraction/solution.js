/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    sign = 1
    denominator = 1
    numerator = 0
    expression.split(/(?=[+-])/).map(fraction=>{
        const [nu, dn] = fraction.split("/")
        denominator*=parseInt(dn);
        return [nu,parseInt(dn)];
        }).forEach(nuArr=>{
            const [n,d]=nuArr
            numerator += parseInt(n)*(denominator/d)
        })
   
    const [reducedNu, reducedDeno] = reduceFraction(numerator,denominator);
    return `${reducedNu}/${reducedDeno}`
}

function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  }

  function reduceFraction(numerator, denominator) {
    if (numerator === 0) {
      return [0,1];
    }
    const divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;
  
    if (denominator === 1) {
      return [numerator,1];
    }
    return [numerator,denominator];
  }