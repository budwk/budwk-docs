# Scheduled Tasks

* V7/V8 has a built-in simple distributed scheduled task implementation mechanism. By incorporating the `wk-starter-job` component, you can define tasks using the `@SJob` annotation on methods


```java
@IocBean(name = "testJob",singleton = false)
@Slf4j
public class TestJob {

    @SJob("demo")
    public void demo(String taskId, String params) {
        log.info("sjob:{} taskId:{} params:{}", "demo", taskId, params);
    }
}
```

* Through the Control Center's `Scheduled Tasks` management, you can set the execution time cycle for scheduled tasks

![Scheduled Tasks 1](../../../images/feature/task01.jpg) 