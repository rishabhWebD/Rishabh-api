import React,{useState,useEffect} from 'react';

const Breed = ()=>{
    const [image,setImg] = useState([]);
    
    const getRand=async()=>{
        
        const url = `https://dog.ceo/api/breeds/image/random/10`;
        const res = await fetch(url);
        const response = await res.json() ;
        console.log(res)  ;
        console.log(response) ;
        const im = Object.values(response.message);
        setImg(im);
        console.log(im);

    }
    useEffect(()=>{
    getRand();
    

},[]);
 return(

     <>
         <div className="sel_dog">
          {
                 image.map((elem)=>{
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
export default Breed