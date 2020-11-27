import React from 'react'
import Tab from '../Tab'
import data from '../../data/data.json'
import { Container, Content, Modal, Img, Title, Header, Intructions } from './style'

export default function index() {
  console.log(data)
  const links = ['Ingredients', 'Instructions']
  const IngTable = <table>
    <tr>
      <th>Name</th>
      <th>Amount</th>
      <th>Unit</th>
    </tr>
    {data.ingredients.map((item) => <tr><td>{item.name}</td><td>{item.amount.metric.value}</td><td>{item.amount.metric.unit}</td></tr>)}
  </table>
  const InsSteps = <Intructions>{data.instructions.steps.map((item) => <p><span>{item.number}</span>{item.step}</p>)}</Intructions>
  return (
    <Modal>
      <Container>
        <Img src="https://spoonacular.com/recipeImages/716426-312x231.jpg"></Img>
        <Header>
          <Title>Fried Rice</Title>
          <Tab links={links} />
          <Content>
            {IngTable}
            {InsSteps}
          </Content>
        </Header>
      </Container>
    </Modal>
  )
}