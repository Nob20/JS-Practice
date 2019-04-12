//Binary to Decimal
function binaryToDecimal(x, base) {
    var parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0 }
    return parsed;
  }
  //In binary, radix is always 2
  console.log(binaryToDecimal(' 0xF', 2));
  console.log(binaryToDecimal(' 00011111000', 2));
  console.log(binaryToDecimal('321', 2));

  
  