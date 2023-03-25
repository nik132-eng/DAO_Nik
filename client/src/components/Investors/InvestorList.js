import { useState, useEffect } from "react";
function InvestorList({state}){
   const [list , setList] = useState([]);
   useEffect(()=>{
      const {contract}=state;
      async function investoresData(){
         const list = await contract.methods.investorsLists().call();
         setList(list);
      }
      contract && investoresData()
   },[state])
   return<>
   <table>
      <th>Investor List</th>
      <tbody>
         {list.map((investorAddress)=>{
            return <tr key={investorAddress}>{investorAddress}</tr>
         })}
      </tbody>
   </table>
   </> 
  }
  export default InvestorList;