import { useState } from "react";
import web3 from "web3";

function Contribute({ state, account }) {
  const { contract } = state;

  async function contributionFunc(event) {
    event.preventDefault();
    const weiValue = document.querySelector("#weiValue").value;
    try {
      if (weiValue <= 0) {
        throw new Error("Contribution amount must be greater than 0");
      }
      const value = web3.utils.toBN(weiValue);
      await contract.methods
        .contribution()
        .send({ from: account, value: value, gas: "1000000" });
      alert("Contribution successful");
      window.location.reload();
    } catch (e) {
      if (e.code === "NUMERIC_FAULT") {
        alert("Contribution amount is too high");
      } else {
        alert(e.message);
      }
    }
  }   

  return (
    <>
      <form onSubmit={contributionFunc}>
        <label className="label1" htmlFor="weiValue">
          Contribution Amount:
        </label>
        <input type="text" id="weiValue"></input>
        <button type="submit">Contribute</button>
      </form>
      <br />
    </>
  );
}

export default Contribute;
