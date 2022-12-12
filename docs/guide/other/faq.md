# 常见问题

## 编译时找不到 wk-starter jar 包

答：没有认真阅读开发指南，没有在 ```wk-starter``` 下执行 ```mvn install```

## 使用Gzip解压缩静态文件

* 查询安装配置信息是否包含 `http_gzip_static_module`
```text
./nginx -V
```

* 配置 `nginx.conf` 的 `gzip_static` 属性

```text
gzip_static on;
```
