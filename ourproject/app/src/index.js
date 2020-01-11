import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, } from 'react-router-dom';
//全局样式
import './assets/css/bass.css';
//引入外部样式
import 'antd/dist/antd.css';
//根组件
import App from './App';

import * as serviceWorker from './serviceWorker';
//渲染
ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
    document.getElementById('root'));

serviceWorker.unregister();