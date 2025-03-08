# Project Deployment

## Frontend Packaging and Deployment
* `pnpm run build`
* Upload the `dist` folder to the server's `/data/v8/dist/` directory

## Backend Packaging and Deployment
* Taking `wk-mini` as an example, run `mvn package nutzboot:shade` in its root directory to package
* Upload `target/wk-mini.jar` to the server's `/data/v8/` directory
* `nohup java -jar wk-mini.jar >/dev/null 2>&1 & ` to run in the background


* Run with configuration file specified in the jar: `nohup java -jar -Dnutz.profiles.active=pro -Xmx450m wk-mini.jar >/dev/null 2>&1 &`
* Run with configuration file loaded from a folder: `nohup java -jar -Dnutz.boot.configure.yaml.dir=/data/budwk/ -Xmx450m wk-mini.jar >/dev/null 2>&1 &`

## Nginx Configuration


* Enable gzip in Nginx by configuring the following content under the `http` node:

```text
# Enable gzip compression
gzip on;
# Compression threshold, only compress files larger than 1K, generally no need to change
gzip_min_length 1k;
# Compression buffer
gzip_buffers 16 64K;
# Compression version (default 1.1, if frontend is squid2.5, please use 1.0)
gzip_http_version 1.1;
# Compression level, 1-10, higher number means better compression but longer time
gzip_comp_level 5;
# File types to compress
gzip_types text/plain application/x-javascript text/css application/xml application/javascript;
# Related to cache services like Squid, when on, it adds "Vary: Accept-Encoding" to the Header
gzip_vary on;
# IE6 is not very friendly to Gzip, don't give it Gzip
gzip_disable "MSIE [1-6]\.";
```

* Complete configuration for `demo.budwk.com.conf`:

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

    # Frontend
	location / {
           root    /data/v8/dist;
           try_files $uri /index.html;
           index  index.html;
    }

    # Local uploaded files
	location /upload/ {
	   alias /data/files/upload;	   
	}

    error_page 405 =200 $uri; 

	location @router {
           rewrite ^.*$ /index.html last;
    }
    
    # Backend request proxy
	location ^~ /api/ {
		proxy_pass http://demo_server/;
		proxy_redirect off;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		client_max_body_size  30M;
	}
        
    # WebSocket proxy
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