import React,{useState,useEffect} from 'react';


const Random = ({choose})=>{
    const [breed,setBreed] = useState([]);
    
    const getRand=async()=>{
        let v = choose;
        
        const url = `https://dog.ceo/api/breed/${v}/images/random/10`;
        const res = await fetch(url);
        const response = await res.json() ;
        console.log(res)  ;
        console.log(response) ;
        const dg = Object.values(response.message);
        setBreed(dg);
        console.log(dg);

    }
    useEffect(()=>{
    getRand();
    

},[]);



    return(
        <>
           <div className="sel_dog">
            {
                
                 breed.map((elem)=>{
                     return(
                         <div className="sel">
                             <img src={elem} height="500px" width="500px"/>
                         </div>
                     )
                 })
                
                  
           }
           </div>
        </>
    )
}

export default Random