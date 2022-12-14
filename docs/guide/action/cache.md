# 应用缓存

* 通过 Redis 实现方法缓存

## 注解说明

* `@CacheDefaults` 类注解定义缓存

  属性名   | 意义
    ----|------
  cacheName | 缓存key的前缀
  cacheLiveTime | 缓存失效时间(isHash=false时有效)
  isHash | 是否集合方式存储


* `@CacheResult`  缓存执行结果

  属性名   | 意义
    ----|------
  cacheName | 缓存key的前缀(为空则取@CacheDefaults.cacheName 值)
  cacheKey | 为空则根据类名、方法名、传参自动生产(cacheName+cacheKey最终组成redis的key)
  cacheLiveTime | 缓存失效时间(@CacheDefaults.isHash=false时有效,为空则取@CacheDefaults.cacheLiveTime 值)
  ignoreNull | 是否缓存 null的执行结果


* `@CacheUpdate`  缓存执行结果

  属性名 | 意义
    ----|------
  cacheName | 缓存key的前缀(为空则取@CacheDefaults.cacheName 值)
  cacheKey | 为空则根据类名、方法名、传参自动生产(cacheName+cacheKey最终组成redis的key)
  cacheLiveTime | 缓存失效时间(@CacheDefaults.isHash=false时有效,为空则取@CacheDefaults.cacheLiveTime 值)


* `@CacheRemove` 删除缓存

  属性名 | 意义
    ----|------
  cacheName | 缓存key的前缀
  cacheKey | 缓存key(可指定key值或使用 * 通配符)

* `@CacheRemoveAll`  清除缓存

## 示例代码

```java
@IocBean(args = {"refer:dao"})
@CacheDefaults(cacheName = RedisConstant.WKCACHE + "sys_area", isHash = false, cacheLiveTime = RedisConstant.WKCACHE_TIMEOUT)
public class SysAreaServiceImpl extends BaseServiceImpl<Sys_area> implements SysAreaService {
    public SysAreaServiceImpl(Dao dao) {
        super(dao);
    }

    @Override
    @CacheResult
    public List<Sys_area> getSubListByCode(String code) {
        // ...
    }

    @Override
    @CacheResult(cacheKey = "${appid}_getAppkey")
    public String getAppkey(String appid) {
        // ...
    }

    @Override
    @Async
    @CacheRemove(cacheKey = "${appid}_*")
    public void cacheRemove(String appid) {

    }
    
    @Override
    @Aop(TransAop.READ_COMMITTED)//事务方法
    public void deleteAndChild(Sys_area area) {
        // ...
    }

    @Override
    @CacheRemoveAll
    @Async//异步方法
    public void cacheClear() {

    }
}

```

## 注意事项
* 如果直接在数据库里修改了数据，记得手动更新或清空缓存
* 方法缓存是在执行后将结果缓存，一些场景(如大屏的首页数据) 最好定时调用 @CacheUpdate 方法进行更新，而不是调用 @CacheRemoveAll 清空缓存