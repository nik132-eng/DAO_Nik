import { useState } from 'react';

function WithdrawStatus({ state, account }) {
  const [allowStatus, setAllowStatus] = useState(false);
  const [disallowStatus, setDisallowStatus] = useState(false);

  const handleAllow = async (event) => {
    event.preventDefault();
    const address = event.target.parentNode.querySelector('.address').value;
    await state.contract.methods.allow(state.manager, address).send({ from: account });
    setAllowStatus(true);
    alert("Withdrawal permission granted for the address entered.");
  };

  const handleDisallow = async (event) => {
    event.preventDefault();
    const address = event.target.parentNode.querySelector('.address').value;
    await state.contract.methods.disallow(state.manager, address).send({ from: account });
    setDisallowStatus(true);
    alert("Withdrawal permission revoked for the address entered.");
  };

  return (
    <>
      <form>
        <label className="label1" htmlFor="address">
          Address:
        </label>
        <input type="text" className="address"></input>
        <button type="submit" onClick={handleAllow}>Allow</button>
      </form>
      {allowStatus && <p>Withdrawal permission granted for the address entered.</p>}
      <br />
      <form>
        <label className="label1" htmlFor="address">
          Address:
        </label>
        <input type="text" className="address"></input>
        <button type="submit" onClick={handleDisallow}>Disallow</button>
      </form>
      {disallowStatus && <p>Withdrawal permission revoked for the address entered.</p>}
      <br />
    </>
  );
}

export default WithdrawStatus;
