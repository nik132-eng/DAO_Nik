function VoteProposal({ state, account }) {
  const { contract } = state;

  async function voteProposalFunc(event) {
    event.preventDefault();
    const proposalId = document.getElementById("voteId").value;
    try {
      await contract.methods.voteProposal(proposalId).send({ from: account, gas: "1000000" });
      alert("Vote submitted successfully");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <form onSubmit={voteProposalFunc}>
        <label className="label1" htmlFor="voteId">
          Proposal Id:
        </label>
        <input type="text" id="voteId"></input>
        <button type="submit">Vote</button>
      </form>
      <br></br>
    </>
  );
}

export default VoteProposal;
