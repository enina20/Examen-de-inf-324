import React from 'react'
import { Link } from 'react-router-dom'
import { TitleSection } from '../components/TitleSection'

export const ScreenInformatica = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <TitleSection first={'Carrera de Informática'} second={'COMPUTADORAS, ANÁLISIS Y SEMÁNTICA, ADELANTE INFORMÁTICA'} />
        <section className="bai-section section-padding">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                <div className="box">
                    <div className="row align-items-center">
                    <div className="col-md-6 mb-4 m-md-0">
                        <div className="circular-img">
                        <div className="circular-img-inner">
                            <div className="circular-img-circle"></div>
                            <img src="img/bai-img.png" alt="bai img"/>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section-title m-0">
                        <h2 className="title">Excelencia en la Formación Profesional</h2>
                        <p className="sub-title">Desarrollo de Sofware & Tecnología</p>
                        </div>
                        {/* <Link to="#" className="btn btn-theme">apply now</Link> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
   </div>
  )
}
