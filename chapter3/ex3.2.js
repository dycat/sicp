function make_monitored(f) {
  let counter = 0;
  function mf(input) {
    if (input === "how many calls") {
      return counter;
    }
    if (input === "reset count") {
      counter = 0;
      return counter;
    }
    counter = counter + 1;
    return f(input);
  }
  return mf;
}
