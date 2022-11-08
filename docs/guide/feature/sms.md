# 短信发送

* `wk-starter-sms` 短信发送组件，主要包含验证码类、通知类短信发送功能

* 组件默认提供 `腾讯云` 的代码实现，您可以扩展短信服务商和实现可视化配置功能

```yaml
sms:
  enable: true       #是否启用
  #服务提供商
  provider: tencent
  tencent:
    secret-id: 123
    secret-key: 456
    appid: 789
    sign: 大鲨鱼
  template:
    register: 813970  #注册短信验证码模版编号
    login: 813970     #登录短信验证码模版编号
    password: 813970  #找回密码短信验证码模版编号
    message: 813970   #短信通知模版编号
```

* 短信发送类

```java
public interface ISmsService {

    /**
     * 发送短信验证码
     *
     * @param mobile 手机号
     * @param text   验证码
     * @param type   类型
     * @return true发送成功
     * @throws SmsException
     */
    void sendCode(String mobile, String text, SmsType type) throws SmsException;

    /**
     * 发送短信通知
     *
     * @param mobile 手机号码(腾讯云最大200)
     * @param param  模板参数值
     * @return
     * @throws SmsException
     */
    void sendMsg(String[] mobile, String[] param) throws SmsException;
}
```