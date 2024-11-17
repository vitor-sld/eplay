import React from 'react'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescripton = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }
  return (
    <S.Card
      title={`Clique aqui para ter mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} />
      <S.Infos>
        {infos.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>

      <S.Description>{getDescripton(description)}</S.Description>
    </S.Card>
  )
}

export default Product
