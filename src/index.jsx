import React from 'react'
import { render } from 'react-dom';

import './styles/style.scss'

const App = () => (
  <div className="container">
    <h1>Webpack Starter Kit</h1>
  </div>
)

render(<App />, document.getElementById('app'))