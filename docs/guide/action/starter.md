# 组件说明

## wk-starter-dependencies

* 定义微服务引用的 jar 包
* 统一定义 jar 包版本，便于升级维护

## wk-starter-common

* 全局公共类，如常量类、枚举类、分页类、注解类、响应结果类等
* 控制台打印的 `banner` 信息

## wk-starter-config

* 用于支持 `yaml` 配置文件
* 用于启用 nacos 配置中心功能，加载优先级顺序为 `命令行配置` > `nacos配置` >  `本地文件配置`

## wk-starter-database

* 定义表的公共字段，如创建人ID、创建时间、修改人ID、修改时间、删除标记
* 提供数据库增删改查公共方法，如 listPage(注意如返回 List<Record> 对象，Record 字段名都是小写字母)、listPageEntity
* 提供雪花主键功能

## wk-starter-dubbo

* 提供 Dubbo RPC功能，通过 Nacos 实现服务注册发现

## wk-starter-gateway

* 提供 API网关功能，前缀代理通过 Nacos 查找对应的WEB服务

## wk-starter-web

* 实现跨域访问
* 实现全局异常拦截，并进行友好错误输出
* 实现表单验证
* 拦截SQL注入和跨站攻击请求
* 打印请求响应耗时

## wk-starter-websocket

* 实现 WebSocket 功能
* 提供后台推送 WebSocket 信息的方法

## wk-starter-log

* 通过 `@SLog` 注解，记录控制类操作日志

## wk-starter-security

* 实现用户登录、会话管理、权限验证、角色验证等功能

## wk-starter-sms

* 实现短信发送功能，支持扩展不同短信提供商

## wk-starter-email

* 实现Email发送功能，支持富文本内容发送

## wk-starter-job

* 实现简易的定时任务功能，通过 Redis发布订阅通知不同微服务模块 `@SJob` 方法定时执行

## wk-starter-storage

* 实现文件的上传和存储，支持本地文件、FTP等存储方式，可扩展阿里云OSS等  

## wk-starter-apiauth

* 提供对外API的签名和验证功能

## wk-starter-tdengine

* 实现 TDEngine 时序数据库支持，提供公共方法