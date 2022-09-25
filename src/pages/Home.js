import React from 'react'
import styled from 'styled-components'


import Sidebar from '../components/Sidebar.js'
import Main from '../components/Main.js'

const Home = () => {
  return (
    <Set>
      <Sidebar />
      <Main />
    </Set>
  )
}



const Set = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
`

export default Home