function make_account(balance, password) {
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
  function dispatch(input_ps, m) {
    return input_ps === password
      ? m === "withdraw"
        ? withdraw
        : m === "deposit"
        ? deposit
        : error(m, "unknown request -- make_account")
      : "Incorrect password";
  }
  return dispatch;
}
