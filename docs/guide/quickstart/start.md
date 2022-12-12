# 项目启动

## 单应用版本

* 找到 `WkMiniLauncher.java` 鼠标右击运行

![java04](../../images/quickstart/java05.png)

## 分布式版本

* 启动顺序 `wk-platform` -> `wk-ucenter` -> `wk-gateway` -> `其他模块`

* 分别找到微服务模块下的 `***Launcher` 类，右击 -> Run

![java01](../../images/quickstart/java01.png)

![java02](../../images/quickstart/java02.png)

![java03](../../images/quickstart/java03.png)
  
* 启动完成后，浏览器访问 [http://127.0.0.1:9900](http://127.0.0.1:9900) 显示404错误是正确的

![java04](../../images/quickstart/java04.png)

## Vue3 前端启动


* 打开命令行，切换到 `wk-vue3-admin` 目录下执行 `pnpm run dev` 命令

```text
D:\java\budwk\wk-vue3-admin>pnpm run dev
```

![node01](../../images/quickstart/node01.png)

* 启动完成后，浏览器访问 [http://127.0.0.1:1818](http://127.0.0.1:1818) 即可登录管理后台

![node02](../../images/quickstart/node02.png)
