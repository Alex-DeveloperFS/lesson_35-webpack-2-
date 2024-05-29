import '@css/style.css'
import * as $ from 'jquery'
import '@less/style.less'
import '@sass/style.scss'
import '@sass/style.sass'

import Post from '@/model/post'
import logo from '@assets/icon-square-big'

const post = new Post('Webpack from Zero to Hero!', logo)

$('pre').addClass ('code').html(post.toString())

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}

start().then((res) => console.log(res))

class Util {
  static id = Date.now();
}
console.log('Util Id:', Util.id);

