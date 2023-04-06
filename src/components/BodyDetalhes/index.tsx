import React, { useEffect, useState } from 'react';
import './style.css'
import api from '../../services/api';
import { Detalhes } from '../../type';
import CardAtores, { SkeletonCardAtores } from '../CardAtores';

export type Params = {
  id: number,
  type: "movie" | "tv",
}


function BodyDetalhes({ id, type }: Params) {

  const [state, setState] = useState<Detalhes | null>(null)
  useEffect(() => {
    api
      .get("detalhes/${type}/${id}")
      .then((response) => response.data)
      .then((detalhes: Detalhes) => {
        setState(detalhes)
      })
      .catch((err: Error) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])



  return (
    <div className="body">
      <div className="elenco">
        <div className=" titulo-elenco">Elenco Principal</div>
        <div className="cards-elenco">
          {
            state === null
              ? <SkeletonCardAtores qtd={5}/>
              // ?  Array.from({length: 10}).map(() => <SkeletonTeste />)

              : state?.cast.map((ator) => {
                return (
                  <CardAtores key={ator.id} character={ator.character} id={ator.id} name={ator.name} profile_path={ator.profile_path}/>
                )
              })

          }
        </div>
      </div>

    </div>

  );
}

export default BodyDetalhes;
