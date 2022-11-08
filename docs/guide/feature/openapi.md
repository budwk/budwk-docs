# 接口文档

* V7 构建了一套注解用来生成 `Swagger3(OpenAPI)` API文档，同时商业版复用了这套注解来实现后端表单验证功能

* 引入 `wk-starter-openapi` 组件，控制类方法上定义API，在微服务启动时会自动生成API文档

```yaml
openapi:
  # 是否启用
  enable: true
  scanner:
    # 扫描包路径
    package: com.budwk.test
  info:
    # 文档标题
    title: BudWk V7 API
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
    - value: X-Token
      name: 用户Token
      in: header
      required: true
```

* `控制中心[接口文档]` [https://demo.budwk.com/api/platform/openapi/](https://demo.budwk.com/api/platform/openapi/#/load/openapi.json)
  
* `Ucenter[接口文档]` [https://demo.budwk.com/api/ucenter/openapi/](https://demo.budwk.com/api/ucenter/openapi/#/load/openapi.json)


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
    // GET POST 必须定义
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