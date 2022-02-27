import { useRouter } from 'next/router'
import React from 'react'

function Resume() {
    const router = useRouter()
    const handleHome = ()=>{
        router.push("/")
        console.log("test");
        
    }
  return (
    <div>
        <button onClick={handleHome} style={{color:'red'}}>Home</button>
        <h1>This is resume page</h1>
    </div>
  )
}

export default Resume