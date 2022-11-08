# 邮件发送

* `wk-starter-email` 邮件发送组件，实现富文本邮件的发送，包含验证码或内容通知

```yaml
email:
  enable: true                  #是否启用
  HostName: smtp.exmail.qq.com  #服务器域名或IP
  SmtpPort: 465                 #服务器端口
  UserName: wizzer@qq.com       #账号
  Password: 123456              #密码
  SSLOnConnect: true            #开启SSL连接
  From: wizzer@qq.com           #发件人
  charset: UTF-8                #字符集, 默认UTF-8
  template:
    domain: https://budwk.com   #邮件内容中留下的域名
    author: 大鲨鱼               #邮件内容中留下的落款
```

* 邮件发送类

```java
@Inject
private EmailSendServer emailSendServer;

/**
 * 发送验证码
 *
 * @param subject 标题
 * @param email   收件人邮箱
 * @param text    验证码
 * @param time    超时时间
 */
public void sendCode(String subject, String email, String text, long time);

/**
 * 发送文本内容
 *
 * @param name    收件人项目
 * @param subject 标题
 * @param email   收件人邮箱
 * @param text    文本内容
 */
public void sendMsg(String name, String subject, String email, String text);

```
