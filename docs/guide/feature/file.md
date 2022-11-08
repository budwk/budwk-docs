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

* 使用 ElementUI 文件上传组件，在请求头传递 `X-Token` 以便后端进行权限判断

```vue
<el-upload
                    :action="uploadUrl"
                    :headers="headers"
                    name="Filedata"
                    limit:1
                    :before-upload="beforeFileUpload"
                    :show-file-list="false"
                    :on-success="handleUploadSuccess"
                  >
    <el-button
        icon="el-icon-upload"
        size="small"
    >上传头像</el-button>
</el-upload>
```

```java
<script>
import { API_UPLOAD_IMAGE } from '@/constant/api/platform/pub/upload'
import {
  API_HOME_USER_SET_AVATAR
} from '@/constant/api/home/home'
export default {
    data() {
        return {
            headers: {
                // 在header传递token用于后台权限验证
                'X-Token': this.$cookies.get('X-Token') 
            },
            uploadUrl: process.env.API + API_UPLOAD_IMAGE, // 图片上传路径
            avatar: ''
        }
    },
    methods: {
        // 文件上传成功后进行保存
        handleUploadSuccess(resp, file) {
            var file_url = resp.data.url
            this.$axios
            .$post(API_HOME_USER_SET_AVATAR, { avatar: file_url })
            .then((d) => {
                if (d.code === 0) {
                    this.$message.success(d.msg)
                    this.avatar = this.conf.AppFileDomain + file_url
                }
            })
        },
        // 上传之前判断文件格式及大小
        beforeFileUpload(file) {
            var isJPG = file.type === 'image/jpeg'
            var isPNG = file.type === 'image/png'
            if (!isJPG && !isPNG) {
                this.$message.error('头像图片格式不正确')
                return false
            }
            var isLt500k = file.size / 1024 <= 500
            if (!isLt500k) {
                this.$message.error('头像图片需小于500KB')
                return false
            }
            return true
        }
    }
}
```