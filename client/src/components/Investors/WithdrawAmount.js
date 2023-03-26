function WithdrawAmount({ state, account }) {

  async function handleWithdraw(event) {
    event.preventDefault();
    const { contract } = state;
    try {
      await contract.methods.withdrawAllEther().send({ from: account, gas: "1000000" });
      alert("Withdrawal successful");
    } catch (e) {
      alert("Error: " + e.message+"hello  ");
    }
  }

  return (
      <>
        <button onClick={handleWithdraw}>Withdraw</button>
      <br />
    </>
  );
}

export default WithdrawAmount;
