# 文件上传

## 文件的存储

* 组件 `wk-starter-storage` 支持 `本地存储`、`ftp`、`天翼云` 等存储方式

```yaml
storage:
  enable: true
  #本地方式
  provider: local
  local:
    #本地存储位置
    path: /data
```

## 后端处理上传

* 这块知识可以详见 nutz文档 [http://nutzam.com/core/mvc/file_upload.html](http://nutzam.com/core/mvc/file_upload.html)

```java
@IocBean
@At("/pub/file")
@Slf4j
public class PubFileController {
    @Inject
    private StorageServer storageServer;
    @Inject
    private SysConfigService sysConfigService;

    // 使用文件上传适配器
    @AdaptBy(type = UploadAdaptor.class, args = {"ioc:fileUpload"})
    @POST
    @At("/upload/file")
    @Ok("json")
    // 检查是否登录
    @SaCheckLogin
    public Result<?> file(@Param("Filedata") TempFile tf, HttpServletRequest req, AdaptorErrorContext err) {
        if (err != null && err.getAdaptorErr() != null) {
            return Result.error(log.isDebugEnabled() ? err.getAdaptorErr().getMessage() : "文件服务异常");
        } else if (tf == null) {
            return Result.error("文件不可为空");
        } else {
            String suffixName = tf.getSubmittedFileName().substring(tf.getSubmittedFileName().lastIndexOf(".")).toLowerCase();
            String filePath = sysConfigService.getString(SecurityUtil.getAppId(), "AppUploadBase") + "/file/" + DateUtil.format(new Date(), "yyyyMMdd") + "/";
            String fileName = R.UU32() + suffixName;
            try {
                return Result.data(storageServer.upload(tf.getInputStream(), fileName, filePath));
            } catch (IOException e) {
                return Result.error(log.isDebugEnabled() ? e.getMessage() : "文件服务异常");
            }
        }
    }
}   
```

## 前端上传组件

* 使用 ElementUI 文件上传组件，在请求头传递 `wk-user-token` 以便后端进行权限判断

```vue
                <el-upload action="#" :on-change="upload" :show-file-list="false"
                    :before-upload="beforeUpload">
                    <el-button>
                        选择
                        <el-icon class="el-icon--right">
                            <Upload />
                        </el-icon>
                    </el-button>
                </el-upload>
```

```javascript
import { fileUpload } from '/@/api/common'

/** 上传预处理 */
const beforeUpload = (file: any) => {
    if (file.type.indexOf("image/") == -1) {
        modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。")
    }
}
/** 上传图片 */
const upload = (file: any) => {
    let formData = new FormData()
    formData.append('Filedata', file.raw)
    fileUpload(formData,{},'image').then((res) => {
        if (res.code == 0) {
            console.log(res.data)
        }
    })
}
```