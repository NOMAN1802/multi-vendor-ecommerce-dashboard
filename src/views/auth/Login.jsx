import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineGooglePlus, AiOutlineGithub} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {CiTwitter} from 'react-icons/ci'

const Login = () => {

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
        console.log(state);
    }
    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>

        <div className='w-[350px] text-[#d0d2d6] p-2 '>

            <div className='bg-[#283046] p-4 rounded-md'>
                <h2 className='text-xl mb-3'>
                    Welcome to e-commerce
                </h2>
                <p className='text-sm mb-3'>
                    Please signin to your account and start your business
                </p>

                <form onSubmit={submit}>
                    
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={inputHandel} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'  type='email' name='email' placeholder='email' id='email' required/>
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={inputHandel} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'  type='password' name='password' placeholder='password' id='password' required/>
                    </div>
                    <div className='flex items-center w-full gap-3 mb-5'>
                        
                        <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500'  type='checkbox' name='checkbox' id='checkbox' required/>
                        <label htmlFor='checkbox'> I agree to privacy policy & terms </label>
                    </div>
                    <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>
                      <div className='flex justify-center item-center mb-3 gap-3'>
                        <p>Already have an account ? <Link to={'/register'}>Signup here</Link></p>
                      </div>
                    <div className='flex items-center justify-center mb-3'>

                        <div className='w-[45%] bg-slate-700 h-[1px]'>

                        </div>
                        <div className='w-[10%] justify-center items-center'>
                            <span className='pb-1'> Or </span>
                        </div>
                        <div className='w-[45%] bg-slate-700 h-[1px]'>

                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-3'>
                        <div className=' w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg cursor-pointer hover:shadow-orange-700/50 justify-center items-center overflow-hidden'>
                        <span> <AiOutlineGooglePlus/></span>
                        </div>
                        <div className=' w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg cursor-pointer hover:shadow-orange-700/50 justify-center items-center overflow-hidden'>
                        <span> <FiFacebook/></span>
                        </div>
                        <div className=' w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg cursor-pointer hover:shadow-cyan-700/50 justify-center items-center overflow-hidden'>
                        <span> <CiTwitter/></span>
                        </div>
                        <div className=' w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg cursor-pointer hover:shadow-purple-700/50 justify-center items-center overflow-hidden'>
                        <span> <AiOutlineGithub/></span>
                        </div>
                        
                        
                    </div>
                </form>

            </div>

        </div>
        
    </div>
);
    
};

export default Login;