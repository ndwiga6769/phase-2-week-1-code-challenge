import React, {useState,useEffect} from 'react'
import './App.css';
import TransactionTable from './TransactionTable';
import Form from './Form';
import Search from './Search';

function App() {
  const [transaction, setTransaction] = useState([])
  useEffect(()=>{
    fetch(' http://localhost:8000/transactions')
            .then(res => res.json())
            .then (data =>setTransaction(data))
            
    },[])


  return (
    <div className="App">
      <Search />
     <Form transactionData = {transaction}/>
     <TransactionTable transactionData = {transaction} />
    </div>
  );
}

export default App;
