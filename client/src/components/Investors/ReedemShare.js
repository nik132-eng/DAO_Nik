function ReedemShare({state,account}){
    async function ReedemFunc(event){
        event.preventDefault();
        const {contract} = state;
        const amount = await document.querySelector("#amount").value;
        try{
            await contract.methods.reedemShare(amount).send({from:account, gas:"1000000"});
            alert("Reedem Successful");
            window.location.reload();
        }catch(e){
            alert("Error: "+e);
        }
      }

    return<><form onClick={ReedemFunc}>
         <label className="label1" htmlFor="amount">
      Number of Shares:
        </label>
    <input type="text" id="amount"></input>

    <button type="submit">Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;