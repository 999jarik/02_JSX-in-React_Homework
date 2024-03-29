import React from 'react'
import logo from '../src/assets/react.svg'
import './App.css'

function App() {

  const header2 = React.createElement('h2', {}, 'Hello world');
  const par = React.createElement('p', null, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eum culpa accusantium corporis expedita eveniet officiis? Odio dolorum autem quam ab voluptatibus earum quaerat reiciendis, libero quidem aliquam odit ea.');
  const img = React.createElement('img', {src: logo, alt: 'logo'})

  return (
    <>
      <h2>Hello world</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eum culpa accusantium corporis expedita eveniet officiis? Odio dolorum autem quam ab voluptatibus earum quaerat reiciendis, libero quidem aliquam odit ea.</p>
      <img src={logo} alt="" />

      {header2}
      {par}
      {img}
    </>
  )
}

export default App
