import React, { useState } from 'react';
import { admin_login } from '../../store/Reducers/authReducer';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
const AdminLogin = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState({

       
        email: '',
        password: ''
    })

    const inputHandel = (e) =>{
        setState ({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) =>{
        e.preventDefault()
        dispatch(admin_login(state))
        // console.log(state);
    }
    
    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>

        <div className='w-[350px] text-[#d0d2d6] p-2 '>

            <div className='bg-[#283046] p-4 rounded-md'>
              <div className='flex justify-center items-center h-[70px]'>
                <div className='w-[180px] h-[50px]'>
                 <img className='h-full w-full' src="http://localhost:3000/images/logo.png" alt="" />
                </div>
              </div>
               

                <form onSubmit={submit}>
                    
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={inputHandel} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'  type='email' name='email' placeholder='email' id='email' required/>
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={inputHandel} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'  type='password' name='password' placeholder='password' id='password' required/>
                    </div>
                   
                    <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>
               
                </form>

            </div>

        </div>
        
    </div>
);
    
};

export default AdminLogin;