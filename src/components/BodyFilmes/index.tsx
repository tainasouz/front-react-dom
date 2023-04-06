import React, { useEffect, useState } from 'react';
import './style.css';
import { FilmesPopulares } from '../../type';
import Card, { SkeletonCard } from '../Card';
import api from '../../services/api';


function BodyFilmes() {
    const [state, setState] = useState<Array<FilmesPopulares>>([])
    useEffect(() => {
        api
      .get("carregaFilmes")
      .then((response) => response.data)
      .then((filmes: FilmesPopulares[]) => {
        setState(filmes);
      })
      .catch((err: Error) => {
        console.error("ops! ocorreu um erro" + err);
      });
    
    }, [])


    return (
        <div>
            <div id="filmes">
                <div className="sessao">
                    <h1 className="titulo-cards text-2xl">
                        Filmes
                    </h1>
                </div>
                <div className='cards-filme '>
                    {
                        state.length === 0
                            ? <SkeletonCard qtd={12}/>

                            : state.map((filme) => {
                                return (
                                    <Card key={filme.id} id={filme.id} poster_path={filme.poster_path} title={filme.title} vote_average={filme.vote_average} genres ={filme.genres} type={"movie"}/>
                                )
                            })

                    }
                </div>
            </div>
        </div>
    )
}

export default BodyFilmes;