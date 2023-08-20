import React,{ useState } from "react"

function Form({}){
    const [date, setDate]= useState("")

    function addDate(event){
      event.preventDefault()
      setDate(event.target.value)
    }
    const [Description, setDescription]= useState("")

    function addDescription(event){
      event.preventDefault()
      setDescription(event.target.value)
    }
    const [Category, setCategory]= useState("")

    function addCategory(event){
      event.preventDefault()
      setCategory(event.target.value)
    }
    const [Amount, setAmount]= useState("")

    function addAmount(event){
      event.preventDefault()
      setAmount(event.target.value)
    }

    const [transaction,setTransaction]=useState([])
    
  function getTransaction(event){
    event.preventDefault()

    const  transactions = {
      date: date,
      description: Description,
      category: Category,
      amount: Amount
    }

   
    console.log(transactions)
    ///event.target.reset()
  }
  


    return(
        <form onClick={getTransaction}>
         <input input type="date" placeholder='add date' onChange={addDate}/>
         <input placeholder='add Description' onChange={addDescription}/>
         <input placeholder='add category'onChange={addCategory}/>
         <input placeholder='add amount'onChange={addAmount}/>

         <button >Submit</button>
      </form>
    )
}
export default Form;