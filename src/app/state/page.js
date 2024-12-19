"use client"
import { useState, useEffect } from 'react'

const State = () => {
    const [ num, setNum ]=useState(5)
    const [ show, setShow ]=useState(false)
    function add()
    {
        setNum(num+1)
    }
    function sub()
    {
        setNum(num-1)
    }

    useEffect(()=>{
        if(num%5===0) 
        {
            setShow(true)
        }
        else setShow(false)
    },[num])

    return ( 
        <div className="p-12 text-center text-5xl">
            <p className='text-center text-5xl'>{ num }</p>
            <button className="border border-black p-2" onClick={add}>Add</button>
            <button className="border border-black p-2" onClick={sub}>subs</button>

            { show && 
            <div className='bg-green-100'>
                <p>hi</p>
            </div>
            
            }
        
        </div>
     );
}
 
export default State;
