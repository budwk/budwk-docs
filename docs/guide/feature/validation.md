# 表单验证

* 表单验证是通过 `wk-starter-openapi` 和 `wk-starter-web` 两个组件实现的，前者提供API注解及表单验证定义，后者用于参数值的验证和拦截

* `GET/DELETE` 请求传参，使用 `@ApiImplicitParams` 及 `@ApiImplicitParam` 定义

```java
public @interface ApiImplicitParam {
    String name() default "";

    String description() default "";

    String example() default "";

    /**
     * 表单验证是否必填字段
     */
    boolean required() default false;

    /**
     * 参数传递方式 PATH=路径参数, QUERY=URL参数
     */ 
    ParamIn in() default ParamIn.QUERY;

    String type() default "string";

    String df() default "";

    /**
     * 表单验证是否启用
     */
    boolean check() default false;

    /**
     * 表单验证正则表达式(枚举)
     */
    Validation validation() default Validation.NONE;

    /**
     * 表单验证正则表达式(自定义)
     */
    String regex() default "";

    /**
     * 表单验证失败提示消息
     */
    String msg() default "";
}
```

* `POST` 请求，使用 `@ApiFormParams` 及 `@ApiFormParam` 定义

```java
public @interface ApiFormParams {
    /**
     * 表单参数详情
     */
    ApiFormParam[] value() default {};

    /**
     * 表单实体类
     */
    Class<?> implementation() default Void.class;

    /**
     * Content-Type
     */
    String mediaType() default "application/json;charset=utf-8;";
}

```

```java
public @interface ApiFormParam {
    String name() default "";

    String type() default "string";

    String description() default "";

    String example() default "";

    /**
     * 是否必填(接口文档与表单验证共用)
     * @return
     */
    boolean required() default false;

    String df() default "";

    /**
     * 表单验证是否启用
     *
     * @return
     */
    boolean check() default false;

    /**
     * 表单验证正则(枚举)
     * @return
     */
    Validation validation() default Validation.NONE;

    /**
     * 表单验证正则(自定义)
     * @return
     */
    String regex() default "";

    /**
     * 表单验证失败提示消息
     * @return
     */
    String msg() default "";
}

```

* 实体类使用 `@ApiModel` 及 `@ApiModelProperty` 定义

```java
public @interface ApiModelProperty {
    String name() default "";

    String description() default "";

    /**
     * 是否必填(接口文档与表单验证共用)
     * @return
     */
    boolean required() default false;

    String example() default "";

    String df() default "";

    /**
     * true=表单参数,false=不在表单请求里显示
     * @return
     */
    boolean param() default true;

    /**
     * 表单验证是否启用
     * @return
     */
    boolean check() default false;

    /**
     * 表单验证正则(枚举)
     * @return
     */
    Validation validation() default Validation.NONE;

    /**
     * 表单验证正则(自定义)
     */
    String regex() default "";

    /**
     * 表单验证失败提示消息
     */
    String msg() default "";
}

```