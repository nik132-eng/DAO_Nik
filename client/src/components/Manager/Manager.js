import { useState } from "react";
import ExecuteProposal from "./ExecuteProposal";
import WithdrawStatus from "./WithdrawStatus";

function Manager({ state, account }) {
    const [isProposalTime, setIsProposalTime] = useState(false);

    const handleStartProposalTime = () => {
    setIsProposalTime(true);
};

    const handleEndProposalTime = () => {
        setIsProposalTime(false);
    };

return (
    <>
        {isProposalTime ? (
        <>
            <ExecuteProposal state={state} account={account} />
            {/* <WithdrawStatus state={state} account={account} /> */}
            <button onClick={handleEndProposalTime}>End Proposal Time</button>
        </>
    ) : (
        <ProposalTime onStartProposalTime={handleStartProposalTime} />
    )}
    </>
);
}

export default Manager;

function ProposalTime({ onStartProposalTime }) {
    return (
    <>
        <h2>Proposal Time</h2>
        <button onClick={onStartProposalTime}>Start Proposal Time</button>
    </>
);
}
