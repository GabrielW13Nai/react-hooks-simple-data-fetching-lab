import React, { useEffect, useState } from "react"
import { data } from "../mocks/data";


function App(){
const [dog, setDog] = useState(data.message);


  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r)=> r.json())
    .then((info)=> setDog(info.message));
},[])


    return(<>
       <p>Loading...</p>
       <img
       src={dog} 
       alt="A Random Dog"/>
      </>
) 
}   

export default App;