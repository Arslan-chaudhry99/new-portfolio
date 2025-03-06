function construct2DArray(original, m, n) {
  if (m === 1 && n === 1) {
    return [];
  }

  let twoDarray = [];

  const putDimen = () => {
    if (twoDarray.length === m) {
      return null;
    } else {
      twoDarray.push([]);
      putDimen();
    }
  };
  putDimen();

  for (let i = 0; twoDarray.length > i; i++) {
    twoDarray[i] = original.slice(twoDarray[i].length, n);
  }


}
construct2DArray([1, 2, 4, 3], 2, 2);
