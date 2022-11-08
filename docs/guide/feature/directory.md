# 项目结构

## 目录结构

* 实际团队项目开发中，建议各微服务模块及前端分别创建 git仓库，控制中心、Ucenter、Starter组件，只需交给一个人负责，维护一套即可

* 前端根据项目需要，可以按业务不同分别独立创建 git仓库，如控制中心前端、营收系统前端、工单系统前端等

```lua
budwk                               -- 根目录
│  ├─wk-starter                     -- 组件中心
│  ├─wk-gateway                     -- 网关中心
│  ├─wk-platform                    -- 控制中心
│  ├─wk-ucenter                     -- 认证中心
│  ├─wk-cms                         -- CMS管理
│  ├─wk-wechat                      -- 微信管理(商业版)
│  ├─wk-vue-admin                   -- Vue前端代码
```

## 微服务模块

* 一个微服务模块，由 `common` 模块和 `server` 模块（可以为多个）构成

* `common` 主要包含 POJO类、枚举类、RPC Provider 类等构成，供给其他模块引用

* `server` 主要包含 业务实现类、控制类等，对外提供API供网关路由请求访问，对内供RPC调用


```lua
│  ├─wk-platform                    -- 控制中心
│  │  ├─wk-platform-common          -- 通用类供其他模块调用
│  │  │  ├─enums        包          -- 枚举类
│  │  │  ├─models       包          -- POJO类,定义表结构
│  │  │  ├─providers    包          -- RPC接口类
│  │  ├─wk-platform-server          -- 服务类提供API及RPC服务
│  │  │  ├─commons      包          -- 模块内部的公共类和其他功能实现
│  │  │  ├─controllers  包          -- 控制类,RESTful API
│  │  │  ├─providers    包          -- RPC接口实现类,一般直接调用service类方法
│  │  │  ├─services     包          -- 业务接口类及实现类,Dao层及业务代码实现

```