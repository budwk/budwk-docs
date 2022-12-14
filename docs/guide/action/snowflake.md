# 主键生成

## 雪花主键

* 利用 Redis 实现唯一 workerId，通过 workerId 生成带时序的雪花主键

```yaml
database:
  enable: true #是否启用数据库功能
  ig:
    snowflake: true #是否启用雪花主键
```

```java
    @Column
    @Name
    @Comment("ID")
    @ColDefine(type = ColType.VARCHAR, width = 32)
    @PrevInsert(els = {@EL("snowflake()")})
    private String id;
```

## 主键生成器

* 根据需要可以自定义主键生成器

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
