/* eslint-disable prettier/prettier */
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import logo from '../../Assets/images/logo.svg'
import cartIcon from '../../Assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => {
    return state.cart
  })

  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1><img src={logo} alt="EPLAY" /></h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a página de em breve"
                  to="/#coming-soon"
                >
                  novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a página de promoções"
                  to="/#on-sale"
                >
                  promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>

        <S.CartButton role='button' onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isOpen ? 'isOpen' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              onClick={() => setIsOpen(false)}
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsOpen(false)}
              title="Clique aqui para acessar a página de em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsOpen(false)}
              title="Clique aqui para acessar a página de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
