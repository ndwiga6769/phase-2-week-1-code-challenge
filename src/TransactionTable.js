import React from "react";

function TransactionTable({transactionData}){
    return(
        <>
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
