const express = require('express');
//express自带的中间件，路由设置 Router==app
const Router = express.Router();

//为了获取req.body里面的数据
Router.use(express.urlencoded({}));

//引入子路由
const searchdataRouter = require('./searchdata');
const hoelistRouter = require('./hoelist');

//调用子路由
Router.use('/searchdata', searchdataRouter);
Router.use('/hoelist', hoelistRouter);

//导出
module.exports = Router;