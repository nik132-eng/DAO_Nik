import { useState, useEffect } from "react";
function ProposalList({state}){
   const [proposals,setproposals] = useState([]);
   useEffect(()=>{
      const {contract} = state;
      async function ProposalListData(){
         const proposals = await contract.methods.ProposalList().call();
         setproposals(proposals);
      }
      contract && ProposalListData();
   })
   return<>
   <table>
      
      <th>Proposal List</th>
      <tbody>
         {
            proposals.map((proposal)=>{
               return (
                  <tr key={proposal.id}>
                     <td>{proposal.id}</td>
                     <td>{proposal.description}</td>
                     <td>{proposal.amount}</td>
                     <td>{proposal.recipient}</td>
                     <td>{proposal.votes}</td>
                     <td>{proposal.end}</td>
                     <td>{String(proposal.isExecuted)}</td>
                  </tr>
               )
            })
         }
      </tbody>
   </table>
   </>
}
export default ProposalList;