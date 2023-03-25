function ExecuteProposal({state, account}) {

  async function executeProposalFunc(event) {
    event.preventDefault();
    const {contract} = state;
    const proposalId = document.getElementById("id").value;

    try {
      await contract.methods.executeProposal(proposalId).send({from: account, gas: "1000000"});
      alert("Proposal executed successfully");
    } catch (e) {
      alert("Error: " + e);
    }
  }

  return (
    <>
      <form onSubmit={executeProposalFunc}>
        <label className="label1" htmlFor="id">
          Proposal Id:
        </label>
        <input type="text" id="id"></input>
        <button type="submit">Execute</button>
      </form>
      <br></br>
    </>
  );
}

export default ExecuteProposal;
