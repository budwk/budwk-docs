# Initialization Settings

## Single Application Version

### MariaDB Settings

* See the MariaDB section in the Environment Setup chapter, connect to the database

* Create an empty database named `budwk_v8`, select `utf8mb4` as the character set

* Note: The project will automatically create table structures and initialize data when it starts, no need to manually import SQL

![mariadb01](../../../images/quickstart/mariadb01.png)

## Distributed Version

### Nacos Settings

* See the Nacos section in the Environment Setup chapter, start Nacos

* Access [http://127.0.0.1:8848/nacos](http://127.0.0.1:8848/nacos) in your browser, enter username `nacos` and password `nacos` to log in

* Create a new namespace `dev` 
  
* Note: Both the namespace ID and namespace name must be `dev`

![nacos01](../../../images/quickstart/nacos01.png)

### MariaDB Settings

* See the MariaDB section in the Environment Setup chapter, connect to the database

* Create an empty database named `budwk_v8`, select `utf8mb4` as the character set

* Note: The project will automatically create table structures and initialize data when it starts, no need to manually import SQL

![mariadb01](../../../images/quickstart/mariadb01.png) 