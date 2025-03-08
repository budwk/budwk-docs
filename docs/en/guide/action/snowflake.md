# Primary Key Generation

## Snowflake Primary Key

* Utilize Redis to implement unique workerId, and generate time-sequenced snowflake primary keys through workerId

```yaml
database:
  enable: true #Whether to enable database functionality
  ig:
    snowflake: true #Whether to enable snowflake primary key
```

```java
    @Column
    @Name
    @Comment("ID")
    @ColDefine(type = ColType.VARCHAR, width = 32)
    @PrevInsert(els = {@EL("snowflake()")})
    private String id;
```

## Primary Key Generator

* You can customize the primary key generator according to your needs

```java
@IocBean(create = "init")
@Slf4j
public class TestGenerator implements IdGenerator {
    @Inject("refer:$ioc")
    private Ioc ioc;
    private RedisService redisService;
    
    public void init() {
        // ...
    }
    
    @Override
    public String next() {
        return Strings.alignRight('', 16, '0');
    }

    @Override
    public Object run(List<Object> fetchParam) {
        return next();
    }

    @Override
    public String fetchSelf() {
        return "test";
    }
}

```

```java
    @Column
    @Name
    @Comment("ID")
    @ColDefine(type = ColType.VARCHAR, width = 32)
    @PrevInsert(els = {@EL("test()")})
    private String id;
``` 