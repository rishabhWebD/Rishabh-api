import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Random from './Select';


const Dog =({setChoose})=>{
    const handleClick = (event)=>{
        
        setChoose(event.target.innerText);
       
    }
    
    const [dog,setDog] = useState([]);
    
    const getDog=async()=>{
        
        const url = `https://dog.ceo/api/breeds/list/all`;
        const response = await fetch(url);
        const resjson = await response.json() ;
        console.log(response)  ;
        console.log(resjson) ;
        const dogname = Object.keys(resjson.message);
        setDog(dogname);
        console.log(dogname);
}


    useEffect(()=>{
    getDog();
    

},[]);
 
    return(
        <div className="home">
            
       
           {
                 dog.map((elem)=>{
                     return(
                         <div className="main">
                            <h1>
                            <Link to='./random'><a id="anchor" onClick={handleClick}>{elem}</a></Link>
                            </h1>
                        </div>
                        
                     )
                 })
                
                 
           }
          
           
        </div>
    )
}

    export default Dog;
    
    
    
    