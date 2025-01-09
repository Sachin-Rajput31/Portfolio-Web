import React, { useState } from 'react'

const SignIn = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        password:''

       

    })
    const HandleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})

    }

    const HandleSubmit=(e)=>{
        e.preventDefault()
        
    
    }
  return (
    <div className='container text-center rounded  m-20 ml-[450px] border-2 border-gray-500 w-80 h-[340px]'>
      
        <form onSubmit={HandleSubmit}>
            <h1 className='text-blue-600 text-center mt-5'>Login⇢</h1>
   <input className='mt-6 border-2 rounded w-64 border-gray-200 h-9' onChange={HandleChange} type="text" name='text'  placeholder='Enter Your Name' />
   <input className='mt-3 border-2 rounded w-64 border-gray-200 h-9' onChange={HandleChange} type="email" name='email'  placeholder='Enter Your Email' />
   <input  className='mt-3 border-2 rounded w-64 border-gray-200 h-9' onChange={HandleChange} type="password" name='password' placeholder='Enter Your Password' />
   <br />
   <button type='submit' className='mt-9 h-8 active:text-white active:bg-green-600 text-black border-2 border-red-200 rounded w-20 hover:bg-amber-600 bg-amber-200'>Submit</button>
        </form>

    </div>
  )
}

export default SignIn
