import '@css/style.css'
import * as $ from 'jquery'
import '@less/style.less'
import '@sass/style.scss'
import '@sass/style.sass'
import '@model/lodash'

import Post from '@/model/post'
import logo from '@assets/icon-square-big'

import React from 'react'
import { createRoot } from 'react-dom/client'


const post = new Post('Webpack from Zero to Hero!', logo)

// $('pre').addClass ('code').html(post.toString())

async function start() {
  return await new Promise((r) =>  setTimeout(() => r('Async done.'), 2000))
}

start().then((res) => console.log(res))

class Util {
  static id = Date.now()
}
console.log('Util Id:', Util.id)

const container = document.getElementById('root')
const root = createRoot(container)

const App = () => (
  <div className="container">
    <h1>Webpack Training</h1>
    <div className="logo"></div>
    <pre />
    <div className="less-demo">
      <h2>Less</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss</h2>
    </div>
  </div>
)

root.render(<App />)
