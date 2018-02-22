function aleatoria(a, b, c) {
  if (a == undefined && b == undefined && c == undefined) {
    return false;
  } else {
    if (a == undefined) {
      if (b == undefined) {
        return c;
      } else if (c == undefined) {
        return b;
      } else {
        return b + c;
      }
    } else if (b == undefined) {
      if (c == undefined) {
        return a;
      } else {
        return a + c;
      }
    } else if (c == undefined) {
      return a + b;
    }else {
      return a*b/c;
    }
  }
}
aleatoria(2,3);
