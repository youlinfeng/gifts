import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './components/Home'
import Tops from './components/Tops'
import Classify from './components/Classify'
import My from './components/My'
import Detail from './components/Detail'

const App = () => (
  <Router>
    <div id="app">
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/tops" component={Tops}/>
        <Route path="/classify" component={Classify}/>
        <Route path="/my" component={My}/>
        <Route path="/detail/:id" component={Detail}/>
      </div> 
      <div className="content"></div>     
      <footer>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/tops">榜单</Link></li>
        <li><Link to="/classify">分类</Link></li>
        <li><Link to="/my">我的</Link></li>
      </footer>
    </div>
  </Router>
)
export default App