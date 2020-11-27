import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Btn, Form, Input, SearchWrapper, Suggestion } from './style'

export default function index() {
  return (
    <Form>
      <Input placeholder="Search recipes for your craving" />
      <Btn type="submit"><FaSearch /></Btn>
      <Suggestion><span>Suggested: </span>chicken curry, pasta , cake, cookies & more</Suggestion>
    </Form>
  )
}