# Email Sending

* The `wk-starter-email` email sending component implements rich text email sending, including verification codes or content notifications

```yaml
email:
  enable: true                  #Whether to enable
  HostName: smtp.exmail.qq.com  #Server domain name or IP
  SmtpPort: 465                 #Server port
  UserName: wizzer@qq.com       #Account
  Password: 123456              #Password
  SSLOnConnect: true            #Enable SSL connection
  From: wizzer@qq.com           #Sender
  charset: UTF-8                #Character set, default UTF-8
  template:
    domain: https://budwk.com   #Domain name left in the email content
    author: BigShark            #Signature left in the email content
```

* Email sending class

```java
@Inject
private EmailSendServer emailSendServer;

/**
 * Send verification code
 *
 * @param subject Title
 * @param email   Recipient's email
 * @param text    Verification code
 * @param time    Timeout
 */
public void sendCode(String subject, String email, String text, long time);

/**
 * Send text content
 *
 * @param name    Recipient's name
 * @param subject Title
 * @param email   Recipient's email
 * @param text    Text content
 */
public void sendMsg(String name, String subject, String email, String text);

``` 