# Frequently Asked Questions

## Cannot find wk-starter jar package during compilation

Answer: Did not carefully read the development guide, did not execute `mvn install` under `wk-starter`

## Using Gzip to decompress static files

* Check if the installation configuration information includes `http_gzip_static_module`
```text
./nginx -V
```

* Configure the `gzip_static` attribute in `nginx.conf`

```text
gzip_static on;
``` 