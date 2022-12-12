# 项目部署

## 前端打包部署
* `pnpm run build`
* 将 `dist` 上传至服务器 `/data/v8/dist/` 文件夹

## 后端打包部署
* 以`wk-mini` 为例，在其根目录运行 `mvn package nutzboot:shade` 打包
* 将 `target/wk-mini.jar` 上传至服务器 `/data/v8/` 文件夹
* `nohup java -jar wk-mini.jar >/dev/null 2>&1 & ` 后端运行

## Nginx配置


* Nginx 开启 gzip ，在 `http` 节点下配置如下内容：

```text
# 开启gzip压缩
gzip on;
# 不压缩临界值，大于1K的才压缩，一般不用改
gzip_min_length 1k;
# 压缩缓冲区
gzip_buffers 16 64K;
# 压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
gzip_http_version 1.1;
# 压缩级别，1-10，数字越大压缩的越好，时间也越长
gzip_comp_level 5;
# 进行压缩的文件类型
gzip_types text/plain application/x-javascript text/css application/xml application/javascript;
# 跟Squid等缓存服务有关，on的话会在Header里增加"Vary: Accept-Encoding"
gzip_vary on;
# IE6对Gzip不怎么友好，不给它Gzip了
gzip_disable "MSIE [1-6]\.";
```

* `demo.budwk.com.conf` 完整配置如下：

```text
upstream demo_server {  
    server 127.0.0.1:9900;  
    server 127.0.0.1:9901;  
}

map $http_upgrade $connection_upgrade {
        default upgrade;
        ''      close;
}

server {
	#listen 80;
	listen 443 ssl;
	#if ( $scheme = "http" ) {
        #    rewrite ^(.*) https://$server_name$1 permanent;
	#}
	server_name demo.budwk.com;
	server_name_in_redirect off;
	ssl_certificate /etc/nginx/ssl/demo.budwk.com.pem;
	ssl_certificate_key /etc/nginx/ssl/demo.budwk.com.key;
	ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
	add_header "X-UA-Compatible" "IE=Edge, chrome=1";

    gzip_static on;

        # 前端
	location / {
           root    /data/v8/dist;
           try_files $uri /index.html;
           index  index.html;
        }

        # 本地上传文件
	location /upload/ {
	   alias /data/files/upload;	   
	}

        error_page 405 =200 $uri; 

	location @router {
           rewrite ^.*$ /index.html last;
        }
    
        # 后端请求代理
	location ^~ /api/ {
		proxy_pass http://demo_server/;
		proxy_redirect off;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		client_max_body_size  30M;
	}
        
        # websocket代理
	location ^~ /websocket {
		proxy_pass http://demo_server/websocket;
		proxy_redirect    off;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection $connection_upgrade;
	}
	
}
```