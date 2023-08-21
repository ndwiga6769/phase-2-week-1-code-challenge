import React from "react";

function Search({myTransaction}){
    return(
         <input type="text" placeholder='SEARCH' onChange={myTransaction}/>
    )
}
export default Search;