import React from 'react'
import { Link } from 'react-router-dom'

export const CardFacultad = ({nombre,star=5,url_img,Slug,path='places'}) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="courses-item">
                <Link to={`/${path}`} className="link wilder">
                    <div className="courses-item-inner">
                        <div className="d-flex justify-content-center">
                            <img src={`${url_img}`} alt={`${nombre}`}/>
                        </div>
                        <h3 className="title">{nombre}</h3>
                        <div className="instructor">
                        </div>
                        {/* <div className="rating">
                            <span className="average-rating">{star}</span>
                            <span className="average-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </span>
                        </div> */}
                        {/* <div className="price">Km. {distance}</div> */}
                    </div>
                </Link>
            </div>
        </div>
    )
}
