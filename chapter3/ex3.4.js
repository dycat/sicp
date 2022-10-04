function make_account(balance, password) {
  let password_err_count = 0;
  function withdraw(amount) {
    if (balance >= amount) {
      balance = balance - amount;
      return balance;
    } else {
      return "Insufficient funds";
    }
  }
  function deposit(amount) {
    balance = balance + amount;
    return balance;
  }
  function count_err() {
    password_err_count = password_err_count + 1;
    return "Incorrect password";
  }
  function call_the_cops () {
    return "Call the cops"
  }
  function dispatch(input_ps, m) {
    if (input_ps === password) {
      return m === "withdraw"
        ? withdraw
        : m === "deposit"
        ? deposit
        : error(m, "unknown request -- make_account");
    } else {
        if (password_err_count > 7) {
            return call_the_cops
          }
      count_err;
    }
  }
  return dispatch;
}
