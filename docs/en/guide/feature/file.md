# File Upload

## File Storage

* The `wk-starter-storage` component supports storage methods such as `local storage`, `ftp`, `Tianyi Cloud`, etc.

```yaml
storage:
  enable: true
  #Local method
  provider: local
  local:
    #Local storage location
    path: /data
```

## Backend Upload Processing

* For more details on this knowledge, see the nutz documentation [http://nutzam.com/core/mvc/file_upload.html](http://nutzam.com/core/mvc/file_upload.html)

```java
@IocBean
@At("/pub/file")
@Slf4j
public class PubFileController {
    @Inject
    private StorageServer storageServer;
    @Inject
    private SysConfigService sysConfigService;

    // Use file upload adapter
    @AdaptBy(type = UploadAdaptor.class, args = {"ioc:fileUpload"})
    @POST
    @At("/upload/file")
    @Ok("json")
    // Check if logged in
    @SaCheckLogin
    public Result<?> file(@Param("Filedata") TempFile tf, HttpServletRequest req, AdaptorErrorContext err) {
        if (err != null && err.getAdaptorErr() != null) {
            return Result.error(log.isDebugEnabled() ? err.getAdaptorErr().getMessage() : "File service exception");
        } else if (tf == null) {
            return Result.error("File cannot be empty");
        } else {
            String suffixName = tf.getSubmittedFileName().substring(tf.getSubmittedFileName().lastIndexOf(".")).toLowerCase();
            String filePath = sysConfigService.getString(SecurityUtil.getAppId(), "AppUploadBase") + "/file/" + DateUtil.format(new Date(), "yyyyMMdd") + "/";
            String fileName = R.UU32() + suffixName;
            try {
                return Result.data(storageServer.upload(tf.getInputStream(), fileName, filePath));
            } catch (IOException e) {
                return Result.error(log.isDebugEnabled() ? e.getMessage() : "File service exception");
            }
        }
    }
}   
```

## Frontend Upload Component

* Use the ElementUI file upload component, passing `wk-user-token` in the request header for backend permission verification

```vue
                <el-upload action="#" :on-change="upload" :show-file-list="false"
                    :before-upload="beforeUpload">
                    <el-button>
                        Select
                        <el-icon class="el-icon--right">
                            <Upload />
                        </el-icon>
                    </el-button>
                </el-upload>
```

```javascript
import { fileUpload } from '/@/api/common'

/** Upload pre-processing */
const beforeUpload = (file: any) => {
    if (file.type.indexOf("image/") == -1) {
        modal.msgError("File format error, please upload image type, such as: JPG, PNG suffix files.")
    }
}
/** Upload image */
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