# Component Description

## wk-starter-dependencies

* Define jar packages referenced by microservices
* Uniformly define jar package versions for easy upgrade and maintenance

## wk-starter-common

* Global common classes, such as constant classes, enumeration classes, pagination classes, annotation classes, response result classes, etc.
* Console printed `banner` information

## wk-starter-config

* Used to support `yaml` configuration files
* Used to enable nacos configuration center functionality, with loading priority order: `Command line configuration` > `nacos configuration` > `Local file configuration`

## wk-starter-database

* Define common fields for tables, such as creator ID, creation time, modifier ID, modification time, deletion mark
* Provide common database CRUD methods, such as listPage (note that if returning List&lt;Record&gt; objects, Record field names are all lowercase letters), listPageEntity
* Provide snowflake primary key functionality

## wk-starter-dubbo

* Provide Dubbo RPC functionality, implementing service registration and discovery through Nacos

## wk-starter-gateway

* Provide API gateway functionality, prefix proxy finds corresponding WEB services through Nacos

## wk-starter-web

* Implement cross-domain access
* Implement global exception interception and friendly error output
* Implement form validation
* Intercept SQL injection and cross-site attack requests
* Print request response time consumption

## wk-starter-websocket

* Implement WebSocket functionality
* Provide methods for backend to push WebSocket messages

## wk-starter-log

* Record controller operation logs through the `@SLog` annotation

## wk-starter-security

* Implement user login, session management, permission verification, role verification, and other functions

## wk-starter-sms

* Implement SMS sending functionality, supporting extension of different SMS providers

## wk-starter-email

* Implement Email sending functionality, supporting rich text content sending

## wk-starter-job

* Implement simple scheduled task functionality, notifying different microservice modules to execute `@SJob` methods on schedule through Redis publish-subscribe

## wk-starter-storage

* Implement file upload and storage, supporting local files, FTP, and other storage methods, extensible to Alibaba Cloud OSS, etc.

## wk-starter-apiauth

* Provide signature and verification functionality for external APIs

## wk-starter-tdengine

* Implement TDEngine time-series database support, providing common methods 