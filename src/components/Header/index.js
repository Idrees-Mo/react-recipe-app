import React from 'react'
import Navbar from '../Navbar'
import Search from '../../containers/search'
import {
  Header,
  Heading,
  Jumbo,
} from './style'

export default function Header2() {
  return (
    <Header>
      <Navbar />
      <Jumbo >
        <Heading>Never wonder what to cook!</Heading>
        <Search />
      </Jumbo>
    </Header>
  )
}