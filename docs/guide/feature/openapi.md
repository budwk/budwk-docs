# 接口文档

* V7/V8 构建了一套注解用来生成 `Swagger3(OpenAPI)` API文档，同时通过这套注解来实现后端表单验证功能

* 引入 `wk-starter-openapi` 组件，控制类方法上定义API，在微服务启动时会自动生成API文档

* `wk-mini` Mini版本访问 API文档路径为 `http://127.0.0.1:9900/openapi/#/load/openapi.json`
* 分布式版本访问 API文档路径，要加微服务模块的前缀，如 `http://127.0.0.1:9900/platform/openapi/#/load/openapi.json`
* 调试时需填写 `wk-user-token`，登录系统后可以在控制台请求路径的 `Request Headers` 中找到

```yaml
openapi:
  # 是否启用
  enable: true
  scanner:
    # 扫描包路径
    package: com.budwk.test
  info:
    # 文档标题
    title: BudWk V8 API
    # 文档版本
    version: 1.0.0
    # 作者信息
    contact:
      name: 大鲨鱼
      email: wizzer@qq.com
  servers:
    # 服务器地址,默认为空则为本机服务
    - url: ""
      description: 本机环境
    - url: https://demo.budwk.com/
      description: 演示环境
    # 请求头默认参数,无需修改
  headers:
    - value: wk-user-token
      name: 用户Token
      in: header
      required: true
```

```java

@IocBean
@At("/auth")
@SLog(tag = "用户认证")
@ApiDefinition(tag = "用户认证")
@Slf4j
public class AuthController {

    @Inject
    private ValidateService validateService;

    @At
    @Ok("json")
    // GET/POST/DELETE 请求方法必须定义
    @GET
    // 接口定义
    @ApiOperation(name = "获取验证码", description = "图形验证码")
    // 表单传参定义
    @ApiFormParams(
            {
                    @ApiFormParam(name = "appId", description = "当前登录的应用ID")
            }
    )
    // 响应结果定义
    @ApiResponses(
            {
                    @ApiResponse(name = "key", description = "验证码的一次性key"),
                    @ApiResponse(name = "code", description = "验证码值")
            }
    )
    public Result<?> captcha(@Param("appId") String appId) {
        // appId 我是例子
        return validateService.getCaptcha();
    }
}

```