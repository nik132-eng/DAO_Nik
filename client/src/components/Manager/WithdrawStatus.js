import { useState } from 'react';

function WithdrawStatus({ state, account,manager }) {
  const [allowStatus, setAllowStatus] = useState(false);
  const [disallowStatus, setDisallowStatus] = useState(false);

  const handleAllow = async (event) => {
    event.preventDefault();
    const add = document.getElementById("allow-address").value;
    if (add) {
      await state.contract.methods.allow(manager, add).send({ from: account , gas:1000000});
      setAllowStatus(true);
      alert("Withdrawal permission granted for the address entered.");
    } else {
      alert("Manager address or withdrawal address is missing.");
    }
  };

  const handleDisallow = async (event) => {
    event.preventDefault();
    const address = document.getElementById("disallow-address").value;
    if (manager && address) {
      await state.contract.methods.disallow(manager, address).send({ from: account , gas:1000000});
      setDisallowStatus(true);
      alert("Withdrawal permission revoked for the address entered.");
    } else {
      alert("Manager address or withdrawal address is missing.");
    }
  };

  return (
    <>
      Address:
      <input type="text" id="allow-address"/>
      <button onClick={handleAllow}>Allow</button>
      {allowStatus && <p>Withdrawal permission granted for the address entered.</p>}
      <br/>
      Address:
      <input type="text" id="disallow-address"></input>
      <button onClick={handleDisallow}>Disallow</button>
      {disallowStatus && <p>Withdrawal permission revoked for the address entered.</p>}
      <br/>
    </>
  );
}

export default WithdrawStatus;
