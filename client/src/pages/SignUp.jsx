import React, { useState } from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
export default function SignOut() {
  const [formData,setFromData] = useState();
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFromData({...formData,
    [e.target.id]: e.target.value
    })
};

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
    setLoading(true);
    const res = await fetch('/api/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      return navigate("/signin")
    }
    catch(err){
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input type='text' placeholder='username'
            className='border p-3 rounded-lg' id='username'onChange={handleChange} />
             <input type='email' placeholder='email'
            className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
             <input type='password' placeholder='password'
            className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
            <button disabled={loading} className='bg-slate-700
            text-white p-3 rounded-lg uppercase
            hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
            <OAuth />
          </form>
          <div className='flex gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to={"/signin"}>
              <span className='text-blue-700'>sign-In</span> 
             </Link>
             {error && <p className='text-red-500 mt-5 '>{error}</p>}
          </div>
    </div>
  )
}
