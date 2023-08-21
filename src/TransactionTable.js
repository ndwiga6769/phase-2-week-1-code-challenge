import React, {useState} from "react";
import Search from "./Search";

function TransactionTable({transactionData}){

  const [mydata,setMydata] = useState('')

  function filterTransaction(event){
    event.preventDefault()
    setMydata(event.target.value)
  }
    const updateTransactions = transactionData.filter((i)=>{
if(mydata === ""){
  return true
}else {
  return i.description.includes(Search)
}
    })
  return(
        <>
        <h4>Search Form</h4>
        <Search myTransaction = {filterTransaction}/>
        <br></br>
        <br></br>
        <table id="myTable">
            <thead>
            <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
            </tr>
            </thead>
      <tbody>
        {updateTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </>
    )
}
export default TransactionTable;
