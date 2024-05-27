import '@css/style.css'
import * as $ from 'jquery'

import Post from '@/model/post'
import logo from '@assets/icon-square-big'

const post = new Post('Webpack from Zero to Hero!', logo)
$('pre').html(post.toString())





