import React, {useState,useEffect} from 'react'
import './App.css';
import TransactionTable from './TransactionTable';
import Form from './Form';

function App() {
  const [transaction, setTransaction] = useState([])
  useEffect(()=>{
    fetch(' http://localhost:8000/transactions')
            .then(res => res.json())
            .then (data =>setTransaction(data))
            
    },[])


  return (
    <div className="App">
     <TransactionTable transactionData = {transaction} />
     <Form transactionData = {transaction}/>
    </div>
  );
}

export default App;
