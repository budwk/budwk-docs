# SMS Sending

* The `wk-starter-sms` SMS sending component mainly includes verification code and notification SMS sending functions

* The component provides default implementation for `Tencent Cloud`. You can extend SMS service providers and implement visual configuration functions

```yaml
sms:
  enable: true       #Whether to enable
  #Service provider
  provider: tencent
  tencent:
    secret-id: 123
    secret-key: 456
    appid: 789
    sign: BigShark
  template:
    register: 813970  #Registration SMS verification code template number
    login: 813970     #Login SMS verification code template number
    password: 813970  #Password recovery SMS verification code template number
    message: 813970   #SMS notification template number
```

* SMS sending class

```java
public interface ISmsService {

    /**
     * Send SMS verification code
     *
     * @param mobile Mobile number
     * @param text   Verification code
     * @param type   Type
     * @return true if sent successfully
     * @throws SmsException
     */
    void sendCode(String mobile, String text, SmsType type) throws SmsException;

    /**
     * Send SMS notification
     *
     * @param mobile Mobile numbers (maximum 200 for Tencent Cloud)
     * @param param  Template parameter values
     * @return
     * @throws SmsException
     */
    void sendMsg(String[] mobile, String[] param) throws SmsException;
} 