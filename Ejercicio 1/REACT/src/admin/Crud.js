
import React, {useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';
export const Crud = () => {
    const baseUrl="http://localhost/examen324/crud/";
    const [data, setData]=useState([]);
    const [modalInsertar, setModalInsertar]= useState(false);
    const [modalEditar, setModalEditar]= useState(false);
    const [modalEliminar, setModalEliminar]= useState(false);
    const [values, setValues]=useState({
      id: '',
      nombre: '',
      lanzamiento: '',
      departamento: ''
    });
  
    const handleChange=e=>{
      const {name, value}=e.target;
      setValues((prevState)=>({
        ...prevState,
        [name]: value
      }))
      // console.log(values);
    }
  
    const abrirCerrarModalInsertar=()=>{
      setModalInsertar(!modalInsertar);
    }
  
    const abrirCerrarModalEditar=()=>{
      setModalEditar(!modalEditar);
    }
  
    const abrirCerrarModalEliminar=()=>{
      setModalEliminar(!modalEliminar);
    }
  
    const peticionGet=async()=>{
      await axios.get(baseUrl)
      .then(response=>{
        console.log(response.data)
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }
  
    const peticionPost=async()=>{
      var f = new FormData();
      f.append("ci", values.ci);
      f.append("nombre", values.nombre);
      f.append("fecha", values.fecnaci);
      f.append("departamento", values.departamento);
      f.append("METHOD", "POST");
      await axios.post(baseUrl, f)
      .then(response=>{
        setData(response.data);
        abrirCerrarModalInsertar();
      }).catch(error=>{
        console.log(error);
      })
    }
  
    const peticionPut=async()=>{
      // var f = new FormData();
      var f = new FormData();
    f.append("ci", values.ci);
    f.append("nombre", values.nombre);
    f.append("departamento", values.departamento);
    f.append("fecnaci", values.fecnaci);
    f.append("METHOD", "PUT");
    await axios.post(baseUrl, f, {params: {ci: values.ci,nombre:values.nombre,departamento: values.departamento,fecnaci: values.fecnaci }})
      .then(response=>{
        setData(response.data);
        abrirCerrarModalEditar();
      }).catch(error=>{
        console.log(error);
      })
    }
  
    const peticionDelete=async()=>{
      await axios.get(`http://localhost/examen324/deletepersona/?ci=${values.ci}`)
      .then(response=>{
        // console.log(response)
        setData(response.data);
        abrirCerrarModalEliminar();
      }).catch(error=>{
        console.log(error);
      })
    }
    const seleccionarFramework=(framework, caso)=>{
      setValues(framework);
  
      (caso==="Editar")?
      abrirCerrarModalEditar():
      abrirCerrarModalEliminar()
    }
  
    useEffect(()=>{
      peticionGet();
    },[])
  return (
    <div className="page-wrapper">
    <div style={{textAlign: 'center'}}>
    <br />
          <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Insertar</button>
          <br /><br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>CI</th>
              <th>Nombre</th>
              <th>Facha de Nacimiento</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {data.map(framework=>(
              <tr key={framework.ci}>
                <td>{framework.ci}</td>
                <td>{framework.nombre}</td>
                <td>{framework.fecnaci}</td>
                <td>{framework.departamento}</td>
                <td>
                  <button className="btn btn-primary" onClick={()=>seleccionarFramework(framework, "Editar")}>Editar</button> {"  "}
                  <button className="btn btn-danger" onClick={()=>seleccionarFramework(framework, "Eliminar")}>Eliminar</button>
                </td>
              </tr>
            )
            )}
    
    
          </tbody> 
    
        </table>
    
    
        <Modal isOpen={modalInsertar}>
          <ModalHeader>Insertar Framework</ModalHeader>
          <ModalBody>
            <div className="form-group">
            <label>CI: </label>
              <br />
              <input type="text" className="form-control" name="ci" onChange={handleChange}/>
              <br />
              <label>Nombre: </label>
              <br />
              <input type="text" className="form-control" name="nombre" onChange={handleChange}/>
              <br />
              <label>Fecha de Nacimiento: </label>
              <br />
              <input type="text" className="form-control" name="fecnaci" onChange={handleChange}/>
              <br />
              <label>Departamento: </label>
              <br />
              <input type="text" className="form-control" name="departamento" onChange={handleChange}/>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>peticionPost()}>Insertar</button>{"   "}
            <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
          </ModalFooter>
        </Modal>
    
    
        
        <Modal isOpen={modalEditar}>
          <ModalHeader>Editar Framework</ModalHeader>
          <ModalBody>
            <div className="form-group">
            <label>Ci: </label>
              <br />
              <input type="text" className="form-control" name="ci" onChange={handleChange} value={values && values.ci}/>
              <label>Nombre: </label>
              <br />
              <input type="text" className="form-control" name="nombre" onChange={handleChange} value={values && values.nombre}/>
              <br />
              <label>Fecha de nacimiento: </label>
              <br />
              <input type="text" className="form-control" name="fecnaci" placeholder='aaaa/mm/dd' onChange={handleChange} value={values && values.fecnaci}/>
              <br />
              <label>Departamento: </label>
              <br />
              <input type="text" className="form-control" name="departamento" onChange={handleChange} value={values && values.departamento}/>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>peticionPut()}>Editar</button>{"   "}
            <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
          </ModalFooter>
        </Modal>
    
        <Modal isOpen={modalEliminar}>
            <ModalBody>
            ¿Estás seguro que deseas eliminar el Framework {values && values.nombre}?
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>peticionDelete()}>
                Sí
              </button>
              <button
                className="btn btn-secondary"
                onClick={()=>abrirCerrarModalEliminar()}
              >
                No
              </button>
            </ModalFooter>
          </Modal>
    
        </div>

    </div>
  )
}
