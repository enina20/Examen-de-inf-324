import React from 'react'
// import { Link } from 'react-router-dom'
import { CardFacultad } from './CardFacultad'
import { TitleSection } from './TitleSection'


export const SectionFacultad = ({data}) => {
    
    return (
        <section className="courses-section section-padding mt-4">
            <section className="seccion-grid">
                <div className="container">
                    <TitleSection first={'Carreras'} />
                    <div className="row">
                        {
                            data.map((l,index)=> <CardFacultad key={l.nombre+index} {...l} path={l.path } />)
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}
