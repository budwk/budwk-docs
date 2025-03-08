# Form Validation

* Form validation is implemented through the `wk-starter-openapi` and `wk-starter-web` components. The former provides API annotations and form validation definitions, while the latter is used for parameter value validation and interception

* For `GET/DELETE` request parameters, use `@ApiImplicitParams` and `@ApiImplicitParam` to define

```java
public @interface ApiImplicitParam {
    String name() default "";

    String description() default "";

    String example() default "";

    /**
     * Whether it's a required field for form validation
     */
    boolean required() default false;

    /**
     * Parameter passing method PATH=path parameter, QUERY=URL parameter
     */ 
    ParamIn in() default ParamIn.QUERY;

    String type() default "string";

    String df() default "";

    /**
     * Whether form validation is enabled
     */
    boolean check() default false;

    /**
     * Form validation regular expression (enumeration)
     */
    Validation validation() default Validation.NONE;

    /**
     * Form validation regular expression (custom)
     */
    String regex() default "";

    /**
     * Form validation failure prompt message
     */
    String msg() default "";
}
```

* For `POST` requests, use `@ApiFormParams` and `@ApiFormParam` to define

```java
public @interface ApiFormParams {
    /**
     * Form parameter details
     */
    ApiFormParam[] value() default {};

    /**
     * Form entity class
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
     * Whether it's required (shared by API documentation and form validation)
     * @return
     */
    boolean required() default false;

    String df() default "";

    /**
     * Whether form validation is enabled
     *
     * @return
     */
    boolean check() default false;

    /**
     * Form validation regular expression (enumeration)
     * @return
     */
    Validation validation() default Validation.NONE;

    /**
     * Form validation regular expression (custom)
     * @return
     */
    String regex() default "";

    /**
     * Form validation failure prompt message
     * @return
     */
    String msg() default "";
}

```

* For entity classes, use `@ApiModel` and `@ApiModelProperty` to define

```java
public @interface ApiModelProperty {
    String name() default "";

    String description() default "";

    /**
     * Whether it's required (shared by API documentation and form validation)
     * @return
     */
    boolean required() default false;

    String example() default "";

    String df() default "";

    /**
     * true=form parameter, false=not displayed in form request
     * @return
     */
    boolean param() default true;

    /**
     * Whether form validation is enabled
     * @return
     */
    boolean check() default false;

    /**
     * Form validation regular expression (enumeration)
     * @return
     */
    Validation validation() default Validation.NONE;

    /**
     * Form validation regular expression (custom)
     */
    String regex() default "";

    /**
     * Form validation failure prompt message
     */
    String msg() default "";
}

``` 