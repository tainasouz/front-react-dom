import React, { useEffect, useState } from 'react';
import { Detalhes } from '../../type';
import './style.css';
import Navbar from '../NavBar';
import NavDetalhes from '../Detalhes';
import api from '../../services/api';

export type Params = {
    id: number,
    type: "movie" | "tv",
}


function HeaderDetalhes({ id, type }: Params) {

    const [state, setState] = useState<Detalhes | null>(null)
    useEffect(() => {
        api
        .get(`detalhes/${type}/${id}`)
            .then(res => res.data)
            .then((destalhes: Detalhes) => {
                setState(destalhes);
            })
    }, [])

    return (
        <div className="header"
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ${state?.backdrop_path ? `, url(https://image.tmdb.org/t/p/original${state.backdrop_path})` : ''}`,
                backgroundSize: state?.backdrop_path ? "cover" : ''
            }}>
            <Navbar />
            {
                state === null
                    ?
                    <div className="detalhes">
                        <div className="cartaz">
                            <img className="skeleton" id="logo-img" alt="" />
                        </div>
                        <div className="infos">
                            <div className="titulo-min-infos">
                                <div className="titulo">
                                    <div className="skeleton skeleton-text skeleton-titulo-destaque"></div>
                                </div>
                            </div>
                            <div className="sinopse-classNameificacao">
                                <div className="sinopse">
                                    <div className="skeleton skeleton-text skeleton-text__body"></div>
                                    <div className="skeleton skeleton-text skeleton-text__body"></div>
                                    <div className="skeleton skeleton-text skeleton-text__body"></div>
                                    <div className="skeleton skeleton-text skeleton-text__body"></div>
                                </div>
                                <div className="classificacao">
                                    <div className="skeleton skeleton-text skeleton-text-classificacao"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    :
                    <NavDetalhes certification={state.certification} genres={state.genres} overview={state.overview} poster_path={state.poster_path} release_date={state.release_date} title={state.title} vote_average={state.vote_average} />



            }
        </div>

    );
}

export default HeaderDetalhes;
