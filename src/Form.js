import React,{ useState } from "react"

function Form(){
    const [date, setDate]= useState("")

    function addDate(event){
      event.preventDefault()
      setDate(event.target.value)
    }
    const [description, setDescription]= useState("")

    function addDescription(event){
      event.preventDefault()
      setDescription(event.target.value)
    }
    const [category, setCategory]= useState("")

    function addCategory(event){
      event.preventDefault()
      setCategory(event.target.value)
    }
    const [amount, setAmount]= useState("")

    function addAmount(event){
      event.preventDefault()
      setAmount(event.target.value)
    }

    const [ form, setForm]=useState([])
    
  function getTransaction(event){
    event.preventDefault();

    let  object = {
      date: date,
      description: description,
      category: category,
      amount: amount
    }
   
   let newObject = [...form, object]
   setForm(newObject)
    console.log(object);
    ///event.target.reset()
  }
  


    return(
        <form onSubmit={getTransaction}>
            <h3>UPDATE TRANSACTIONS</h3>
         <input input type="date" placeholder='add date' onChange={(event)=>addDate (event)}/><br></br>
         <input placeholder='add Description' onChange={(event)=>addDescription (event)}/><br></br>
         <input placeholder='add category'onChange={(event)=>addCategory (event)}/><br></br>
         <input placeholder='add amount'onChange={(event)=>addAmount (event)}/>
         <br></br>
         <button >Submit</button>
      </form>
    )
}
export default Form;