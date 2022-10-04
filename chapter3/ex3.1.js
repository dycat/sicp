function make_accumulator(acc_num) {
  function acc(amount) {
    acc_num = acc_num + amount;
    return acc_num;
  }
  return acc;
}

const a = make_accumulator(5);

a(10);

a(10);
