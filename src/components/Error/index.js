import React from 'react'
import { FaTimes } from "react-icons/fa";
import {
  Container,
  Msg
} from './style'

function Error({ error, setError }) {
  return (
    <Container>
      <Msg><span>Sorry!</span>{error.message} </Msg>
      <FaTimes style={{ marginLeft: "60px" }} onClick={() => setError()} />
    </Container>
  )
}

export default Error