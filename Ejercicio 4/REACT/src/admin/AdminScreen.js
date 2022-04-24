import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/authContenxt'

// import { useGetAdmin } from '../../hooks/useGetAdmin'

export const AdminScreen = () => {
    // const {dataManagers,dataUsers,isLoading} = useGetAdmin()
    const {user} =  useContext(AuthContext)
    console.log(user)
    const [data, setdata] = useState([])
    // console.log(dataClients)
    const login = async ()=> {
        const const1 = axios.get(`http://localhost/examen324/promedio/`);
        const resp = await const1;
        setdata(resp.data)
    }
    useEffect(() => {
      login()
    }, [])
    return (
    <div className="page-wrapper"> 
        <div className="container-fluid">
                <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Departamento</th>
            <th scope="col">Promedio</th>
            </tr>
        </thead>
        <tbody>
        {       
            data?.map((data,index)=> 
                <tr key={data.departamento}>
                    <th scope="row">{index+1}</th>
                    <td>{data.departamento}</td>
                    <td>{data.promedio}</td>
                </tr>
            )           
        }
        </tbody>
        </table>
        </div>
    </div>    
    )
}
