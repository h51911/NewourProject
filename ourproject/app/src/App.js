import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// 引入页面组件
import Nav from './page/Nav'; // 导航
import Hotel from './page/Hotel'; // 酒店
import Travel from './page/Travel'; // 行程
import Steward from './page/Steward'; // 管家
import Treatment from './page/Treatment'; // 礼遇
import Member from './page/Member'; // 会员
import Search from './page/Search';// 搜索
import Hoelist from './component/Hoelist';// 酒店列表
// 样式
import './App.css';
import './assets/css/search.css';


//定义节点组件
function App() {
  return (
    <div id="App" >
      <Switch>
        <Route path="/search" >
          <Search></Search>
        </Route>
        <Route path="/hotel" >
          <Hotel></Hotel>
        </Route>
        <Route path="/travel" >
          <Travel></Travel>
        </Route>
        < Route path="/steward" >
          <Steward></Steward>
        </Route>
        <Route path="/treatment" >
          <Treatment></Treatment>
        </Route>
        <Route path="/member" >
          <Member></Member>
        </Route >
        <Route path="/hoelist" >
          <Hoelist></Hoelist>
        </Route >
        {/* 默认进入首页 */}
        <Redirect to="/hoelist" />
      </Switch>
      <Nav />
    </div>);
}

export default App;