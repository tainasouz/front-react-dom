import React, { useEffect, useState } from 'react';
import { IconContext } from "react-icons";
import { IoStar } from 'react-icons/io5'
import Poster from '../../assets/img/poster.png'
import './style.css';
import { Link } from 'react-router-dom';

export type CardType = {
    id: number;
    poster_path?: string;
    title?: string;
    vote_average: number;
    genres?: string
    type: string
 
}

function Card({ id, poster_path, title, vote_average, genres, type }: CardType) {

    return (

        <div className="card">
            <div className="img-card">
                <Link to={`/detalhes/${id}/${type}`} className="link-img">
                    {
                        poster_path !== null
                        ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                        :
                        <img src={Poster} alt={title} />
                    }
                    
                </Link >
            </div>
            <div className="info-card">
                <Link to={`/detalhes/${id}/${type}`} className="titulo-card">{title}</Link>
                <div className="genero-card" id={`card-${id}`}>{genres}</div>
                <div className="avaliacao-card">
                    <IconContext.Provider value={{ style: { color: '#ffd900', fontSize: '16px' } }}>
                        <IoStar />
                    </IconContext.Provider>
                    <div className="num-card">{vote_average.toFixed(1)}</div>
                </div>

            </div>
        </div>

    );
}

type SkeletonCard = {
    qtd: number;
}

export function SkeletonCard({ qtd }: SkeletonCard) {
    return (
        <>

            {
                Array.from({ length: qtd }).map((_, index) => 
                    <div className="card" key={`skeleton-${index}`}>
                        <div className="img-card">
                            <img className="skeleton" id="logo-img" alt="" />
                        </div>
                        <div className="info-card">
                            <h3 className="titulo-card">
                                <div className="skeleton skeleton-text skeleton-titulo-card"></div>
                            </h3>
                            <h4 className="genero-card">
                                <div className="skeleton skeleton-text skeleton-text__body"></div>
                            </h4>
                            <div className="avaliacao-card">
                                <div className="skeleton skeleton-text skeleton-text-classificacao"></div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Card