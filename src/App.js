import Demo from "./Demo";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import React from "react";
// 引入路由
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    // 全局应用组件路由
    // 此后所有内容 都在 HashRouter
    <HashRouter>
      <div>
        <h1>组件路由</h1>
        <Link to="/home">首页</Link>
        <br />
        <Link to="/movie">电影</Link>
        <br />
        <Link to="/demo3">HELLO</Link>
        <hr></hr>
        <Route path="/home" component={Demo}></Route>
        <Route path="/movie" component={Demo2}></Route>
        <Route path="/demo3" component={Demo3}></Route>
      </div>
    </HashRouter>
  );
}

export default App;
