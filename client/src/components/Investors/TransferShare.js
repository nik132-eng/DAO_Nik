import { BigNumber } from "bignumber.js";
function TransferShare({ state, account }) {
    async function TransferShareFunc(event) {
      event.preventDefault();
      const { contract } = state;
      const amount = new BigNumber(document.querySelector("#amount").value);
      const to = await document.querySelector("#to").value;
      try {
        await contract.methods
          .transferShare(amount, to)
          .send({ from: account, gas: "1000000" });
        alert("transfer Successful");
        window.location.reload();
      } catch (e) {
        alert("Error: " + e);
      }
    }
    
return (
    <>
        <form onSubmit={TransferShareFunc}>
        <label className="label1" htmlFor="to">
            Amount:
        </label>
        <input type="text" id="to"></input>
        <label className="label1" htmlFor="amount">
            Address:
        </label>
        <input type="text" id="amount"></input>

        <button type="submit">Transfer Share</button>
    </form>
    <br></br>
    </>
);
}
export default TransferShare;
