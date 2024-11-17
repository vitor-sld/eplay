import React from 'react'

import Product from '../Product'

import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  const getGamesTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discont) {
      tags.push(`${game.prices.discont}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(Number(game.prices.current)))
    }
    return tags
  }
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  title={game.name}
                  category={game.details.category}
                  system={game.details.system}
                  description={game.description}
                  infos={getGamesTags(game)}
                  image={game.media.thumbnail}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
