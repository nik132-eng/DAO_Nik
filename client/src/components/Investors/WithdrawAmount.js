import { useState } from "react";

function WithdrawAmount({ state, account }) {
  const [amount, setAmount] = useState("");

  async function handleWithdraw(event) {
    event.preventDefault();
    const { contract } = state;
    try {
      await contract.methods.withdrawAllEther().send({ from: account, gas: "1000000" });
      alert("Withdrawal successful");
      setAmount("");
    } catch (e) {
      alert("Error: " + e.message);
    }
  }

  return (
    <form onSubmit={handleWithdraw}>
      <label htmlFor="amount">Amount to Withdraw:</label>
      <input
        type="text"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Withdraw</button>
    </form>
  );
}

export default WithdrawAmount;
