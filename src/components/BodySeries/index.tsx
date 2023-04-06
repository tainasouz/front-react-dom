import React, { useEffect, useState } from 'react';
import './style.css';
import { SeriesPopulares } from '../../type';
import Card, { SkeletonCard } from '../Card';
import api from '../../services/api';


function BodyFilmes() {
    const [state, setState] = useState<Array<SeriesPopulares>>([])
    useEffect(() => {
        api
        .get('carregaSeries')
            .then(res => res.data)
            .then((series: SeriesPopulares[]) => {
                setState(series);

            })
    }, [])


    return (
        <div>
            <div id="series">
                <div className="sessao">
                    <h1 className="titulo-cards text-2xl">
                        Séries
                    </h1>
                </div>
                <div className='cards-program '>
                    {
                        state.length === 0
                            ? <> 
                            <SkeletonCard qtd={12}/>
                            </>
                               
                            : state.map((serie) => {
                                return (
                                    <Card key={serie.id} id={serie.id} poster_path={serie.poster_path} title={serie.name} vote_average={serie.vote_average} genres={serie.genres} type={"tv"}/>
                                )
                            })

                    }
                </div>
            </div>
        </div>

    )
}

export default BodyFilmes;