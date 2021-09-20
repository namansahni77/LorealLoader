import React, { Fragment, useEffect, useState } from 'react';
import './Loader.css';
const Loader =()=>{
    const[count,setCount]=useState(0);
useEffect(()=>{
    const handler = setInterval(()=>{
          setCount(oldvalue=>{
              const val =oldvalue+1
              if(val>=100){
                clearInterval(handler);
                console.log(handler)
              }
              return val
            })
        console.log(count);
      },95)
},[])
  
return(
    <Fragment>
        <div className="center">
<h1 >L'oreal</h1>
<div className='num' >{count + '%'}</div>
</div>
    </Fragment>
);
}
export default Loader;