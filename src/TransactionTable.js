import React, {useState} from "react";
import Search from "./Search";

function TransactionTable({transactionData}){

  const [mydata,setMydata] = useState('')
  const filterTransaction = (e)=> {
    e.preventDefault()
    setMydata(e.target.value)
  }
    const updateTransactions = transactionData.filter((i)=>{
if(mydata.length>0){
  return i.description === mydata
}else {
  return false
}
    })
  return(
        <>
        <Search />
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
        {transactionData.map((transaction) => (
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
