import React, { useContext, useState, useRef, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import RecipeContext from '../../context/RecipeContext'
import Tab from '../Tab'
import {
  Container,
  Content,
  Modal,
  Img,
  Title,
  Header,
  Intructions
} from './style'

export default () => {
  const { recipe, toggleModal } = useContext(RecipeContext)
  const [active, setActive] = useState(true)

  const setHidden = () => {
    document.body.style.overflow = 'hidden';
  }
  const RemoveHidden = () => {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    setHidden()
    return () => {
      RemoveHidden()
    }
  }, [])

  const modalRef = useRef();
  const closeModal = e => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };
  const IngTable = <table>
    <tr>
      <th>Name</th>
      <th>Amount</th>
      <th>Unit</th>
    </tr>
    {recipe.ingredients.map((item) => <tr><td>{item.name}</td><td>{item.amount.metric.value}</td><td>{item.amount.metric.unit}</td></tr>)}
  </table>

  const InsSteps = <Intructions>{recipe.instructions.map((item) => <p><span>{item.number}</span>{item.step}</p>)}</Intructions>
  console.log(active)
  return (
    <Modal onClick={closeModal} ref={modalRef}>
      <Container>
        <Img src={recipe.image}></Img>
        <Header>
          <Title>{recipe.title} </Title>
          <Tab modalTab setActive={setActive} active={active} />
          <Content>
            {active ? IngTable : InsSteps}
          </Content>
        </Header>
        <span className="close" onClick={toggleModal}><FaTimes /></span>
      </Container>
    </Modal>
  )
}