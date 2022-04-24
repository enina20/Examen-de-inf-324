import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/authContenxt'

// import { useGetAdmin } from '../../hooks/useGetAdmin'

export const UserScreen = () => {
    // const {dataManagers,dataUsers,isLoading} = useGetAdmin()
    const {user} =  useContext(AuthContext)
    console.log(user)
    const [data, setdata] = useState([])
    // console.log(dataClients)
    const login = async ()=> {
        const const1 = axios.get(`http://localhost/examen324/estudiante/?ci=${user.data.ci}`);
        const resp = await const1;
        setdata(resp.data)
    }
    useEffect(() => {
      login()
    }, [])
     
    console.log(data)

    return (
    <div className="page-wrapper"> 
        <div className="container-fluid">
                <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Sigla</th>
                <th scope="col">Nota 1</th>
                <th scope="col">Nota 2</th>
                <th scope="col">Nota 3</th>
                <th scope="col">Nota Total</th>
            </tr>
        </thead>
        <tbody>
        {       
            data?.map((data,index)=> 
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{data.sigla}</td>
                    <td>{data.nota1}</td>
                    <td>{data.nota2}</td>
                    <td>{data.nota3}</td>
                    <td>{data.notafinal}</td>

                </tr>
            )           
        }
        </tbody>
        </table>
        </div>
    </div>    
    )
}
