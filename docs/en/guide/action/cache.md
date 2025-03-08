# Application Cache

* Implement method caching through Redis

## Annotation Description

* `@CacheDefaults` Class annotation defining cache

  Attribute Name   | Meaning
    ----|------
  cacheName | Prefix for cache key
  cacheLiveTime | Cache expiration time (effective when isHash=false)
  isHash | Whether to store as a collection


* `@CacheResult`  Cache execution result

  Attribute Name   | Meaning
    ----|------
  cacheName | Prefix for cache key (if empty, takes the value of @CacheDefaults.cacheName)
  cacheKey | If empty, automatically generated based on class name, method name, and parameters (cacheName+cacheKey ultimately forms the redis key)
  cacheLiveTime | Cache expiration time (effective when @CacheDefaults.isHash=false, if empty, takes the value of @CacheDefaults.cacheLiveTime)
  ignoreNull | Whether to cache null execution results


* `@CacheUpdate`  Update cache execution result

  Attribute Name | Meaning
    ----|------
  cacheName | Prefix for cache key (if empty, takes the value of @CacheDefaults.cacheName)
  cacheKey | If empty, automatically generated based on class name, method name, and parameters (cacheName+cacheKey ultimately forms the redis key)
  cacheLiveTime | Cache expiration time (effective when @CacheDefaults.isHash=false, if empty, takes the value of @CacheDefaults.cacheLiveTime)


* `@CacheRemove` Remove cache

  Attribute Name | Meaning
    ----|------
  cacheName | Prefix for cache key
  cacheKey | Cache key (can specify key value or use * wildcard)

* `@CacheRemoveAll`  Clear cache

## Example Code

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
    @Aop(TransAop.READ_COMMITTED)//transaction method
    public void deleteAndChild(Sys_area area) {
        // ...
    }

    @Override
    @CacheRemoveAll
    @Async//asynchronous method
    public void cacheClear() {

    }
}

```

## Notes
* If you modify data directly in the database, remember to manually update or clear the cache
* Method caching caches the result after execution. In some scenarios (such as homepage data for dashboards), it's better to periodically call the @CacheUpdate method to update, rather than calling @CacheRemoveAll to clear the cache 