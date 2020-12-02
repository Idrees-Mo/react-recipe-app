import React, { useEffect } from 'react'
import {
  Container,
  Spiner
} from './style'
const setHidden = () => {
  document.body.style.overflow = 'hidden';
}
const RemoveHidden = () => {
  document.body.style.overflow = 'auto';
}
function Loader() {
  useEffect(() => {
    setHidden()
    return () => {
      RemoveHidden()
    }
  }, [])
  return (
    <Container>
      <Spiner>
      </Spiner>
    </Container>
  )
}

export default Loader
