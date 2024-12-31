import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
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
    const res = await fetch('/api/signin',
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
      return navigate("/")
    }
    catch(err){
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
             <input type='email' placeholder='email'
            className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
             <input type='password' placeholder='password'
            className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
            <button disabled={loading} className='bg-slate-700
            text-white p-3 rounded-lg uppercase
            hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In '}</button>
          </form>
          <div className='flex gap-2 mt-5'>
            <p>Dont Have an account?</p>
            <Link to={"/signup"}>
              <span className='text-blue-700'>Sign-Up</span> 
             </Link>
             {error && <p className='text-red-500 mt-5 '>{error}</p>}
          </div>
    </div>
  )
}
