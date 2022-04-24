import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContenxt';
import { useForm } from '../hooks/useForm'
import { types } from '../types/types';
import { Breadcrumb } from './Breadcrumb';

export const LoginScreen = () => {
    const {handleInputChange,values} =useForm({text: '', password:''})
    const {dispatch} = useContext(AuthContext)
    const Navigate = useNavigate()
    // const [swalProps, setSwalProps] = useState({});

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(values.text!=='' &values.password!==''){
            // login(values.text,values.password)
        }
    }

    const click =()=> {
        login(values.text,values.password)
    }
    const login = async (user,password)=> {
        const const1 = axios.get(`http://localhost/examen324/login/?usuario=${user}&contrasena=${password}`);
        const resp = await const1;
        console.log(resp)
        if(!resp.data){
            console.log('error')
        }
        else{
            const action = {
                type: types.login,
                payload: {data: resp.data[0], type: resp.data[0].cod}
            }
            dispatch(action);
            // console.log(typeof resp.data[0].cod)
            if(resp.data[0].cod === '2' ){
                Navigate('/user/')
            }
            else if( resp.data[0].cod === '1' ){
                console.log('paso')
                Navigate('/admin')
            }
        
    }
}
    return (
    <>
        <Breadcrumb type='Iniciar Sesión' />

        <section className="login-section section-padding animate__animated animate__fadeIn">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <div className="login-form box">
                            <h2 className="form-title text-center">Inicia Sesión</h2>
                            <form onSubmit={(e)=>handleSubmit(e)}>
                                <div className="form-group">
                                    <input value={values.text} onChange={(e)=>handleInputChange(e)} name='text' type="text" className="form-control" placeholder="Correo"/>
                                </div>
                                <div className="form-group">
                                    <input value={values.password} onChange={(e)=>handleInputChange(e)} name='password' type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <button type="submit" className="btn btn-theme btn-block btn-form" onClick={click}>Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- login section end --> */}
    </>
    )
}
