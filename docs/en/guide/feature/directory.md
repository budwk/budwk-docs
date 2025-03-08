# Project Structure

## Single Application Version

```lua
budwk                               -- Root Directory
│  ├─wk-mini                        -- Mini Single Application Deployment Version
│  ├─wk-vue3-admin                  -- Vue3 Frontend Code
```

## Distributed Version

### Directory Structure

* In team project development, it is recommended that `wk-platform`, `wk-ucenter`, and `wk-starter` be assigned to one person, maintaining only one set

* According to project needs, the frontend can be independently created in separate git repositories based on different businesses, such as control center frontend, revenue system frontend, work order system frontend, etc.

```lua
budwk                               -- Root Directory
│  ├─wk-starter                     -- Component Center
│  ├─wk-gateway                     -- Gateway Center
│  ├─wk-platform                    -- Control Center
│  ├─wk-ucenter                     -- Authentication Center
│  ├─wk-cms                         -- CMS Management
│  ├─wk-wechat                      -- WeChat Management
│  ├─wk-vue3-admin                  -- Vue3 Frontend Code
```

### Microservice Modules

* A microservice module consists of a `common` module and a `server` module (can be multiple)

* `common` mainly includes POJO classes, enumeration classes, RPC Provider classes, etc., for other modules to reference

* `server` mainly includes business implementation classes, controller classes, etc., providing APIs for gateway routing requests externally, and for RPC calls internally


```lua
│  ├─wk-platform                    -- Control Center
│  │  ├─wk-platform-common          -- Common Classes for Other Modules
│  │  │  ├─enums        package     -- Enumeration Classes
│  │  │  ├─models       package     -- POJO Classes, Define Table Structures
│  │  │  ├─providers    package     -- RPC Interface Classes
│  │  ├─wk-platform-server          -- Service Classes Providing API and RPC Services
│  │  │  ├─commons      package     -- Module Internal Common Classes and Other Functionality Implementations
│  │  │  ├─controllers  package     -- Controller Classes, RESTful API
│  │  │  ├─providers    package     -- RPC Interface Implementation Classes, Generally Directly Call Service Class Methods
│  │  │  ├─services     package     -- Business Interface Classes and Implementation Classes, Dao Layer and Business Code Implementation

``` 