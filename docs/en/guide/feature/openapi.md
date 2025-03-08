# API Documentation

* V7/V8 has built a set of annotations to generate `Swagger3(OpenAPI)` API documentation, while also implementing backend form validation functionality through this set of annotations

* Incorporate the `wk-starter-openapi` component, define APIs on controller class methods, and API documentation will be automatically generated when the microservice starts

* `wk-mini` Mini version API documentation path is `http://127.0.0.1:9900/openapi/#/load/openapi.json`
* For the distributed version, the API documentation path needs to add the microservice module prefix, such as `http://127.0.0.1:9900/platform/openapi/#/load/openapi.json`
* When debugging, you need to fill in `wk-user-token`, which can be found in the `Request Headers` of the request path in the console after logging into the system

```yaml
openapi:
  # Whether to enable
  enable: true
  scanner:
    # Scan package path
    package: com.budwk.test
  info:
    # Document title
    title: BudWk V8 API
    # Document version
    version: 1.0.0
    # Author information
    contact:
      name: BigShark
      email: wizzer@qq.com
  servers:
    # Server address, default is empty for local service
    - url: ""
      description: Local Environment
    - url: https://demo.budwk.com/
      description: Demo Environment
    # Request header default parameters, no need to modify
  headers:
    - value: wk-user-token
      name: User Token
      in: header
      required: true
```

```java

@IocBean
@At("/auth")
@SLog(tag = "User Authentication")
@ApiDefinition(tag = "User Authentication")
@Slf4j
public class AuthController {

    @Inject
    private ValidateService validateService;

    @At
    @Ok("json")
    // Request method must define @GET/@POST/@DELETE 
    @GET
    // Interface definition
    @ApiOperation(name = "Get Verification Code", description = "Graphic Verification Code")
    // Form parameter definition
    @ApiFormParams(
            {
                    @ApiFormParam(name = "appId", description = "Current login application ID")
            }
    )
    // Response result definition
    @ApiResponses(
            {
                    @ApiResponse(name = "key", description = "One-time key for verification code"),
                    @ApiResponse(name = "code", description = "Verification code value")
            }
    )
    public Result<?> captcha(@Param("appId") String appId) {
        // appId I'm an example
        return validateService.getCaptcha();
    }
}

```

* For `GET/DELETE` request parameters, use `@ApiImplicitParams` and `@ApiImplicitParam` to define

* For `POST` requests, use `@ApiFormParams` and `@ApiFormParam` to define

* For entity classes, use `@ApiModel` and `@ApiModelProperty` to define 