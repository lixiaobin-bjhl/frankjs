# vue-component
### component
* [audioPlayer](https://github.com/lixiaobin-bjhl/vue-component/blob/master/AudioPlayer.vue) 音频播放
* 器，支持播放倒计时，播放动画，动态显示音频宽度。

    | 参数 | 说明 | 默认值 |
    | --- | --- | --- |
    | seconds | 播放时长 | 无 |
    | url | 音频地址 | 无 |
    | maxWitdth | 播放器显示最大宽度 | 200px |
    | minWitdth | 播放器显示最小宽度 | 85px |

* [edtior](https://github.com/lixiaobin-bjhl/vue-component/blob/master/Editor.vue) 基于wangEditor富文本编辑器。

    #### 参数
    
    | 参数 | 说明 | 默认值 |
    | --- | --- | --- |
    | v-model | 编辑器初始内容 | “” |
    | height| 编辑器的高度 | 500px |
    | uploadUrl| 上传图片的url | "" |
    
    #### 事件
    * change 编辑器内容发生变化

* [upload](https://github.com/lixiaobin-bjhl/vue-component/blob/master/Upload.vue) 文件上传器
    #### 参数
    
    | 参数 | 说明 | 默认值 |
    | --- | --- | --- |
    | accept | 上传accpet设置 | image/* |
    | multiple| 是否支持可文件上传| false |
    
    #### 事件
    * change 选择文件发生变化
    
### filter
* compressImage 七牛云图片裁剪，参数见function中compressImage
* currency 将数字格式化成人民币形式

| 参数 | 说明 | 默认值 
| --- | --- | --- |
| value | 需要格式化成货币的数字 | 无 |

* date 格式化时间

| 参数 | 说明 | 默认值 
| --- | --- | --- |
| value | 日期或者时间戳 | 无 |
| pattern | 时间格式，如(yyyy-MM-dd) | 无 |


### function
* compressImage 根据七牛云存储key获取裁剪后图片的URL（考虑retina屏）

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
|  storageId| 七牛云存储ID  | 无 |
|  option.width| 裁剪宽度，若没指定，则按高度等比计划宽度  | 无 |
|  option.height| 裁剪高度，若没指定，则按宽度等比计划高度  | 无 |

* indexBy 返回中数组以指定属性为key组成的map

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
|  array | 要生成map的数组  | 无 |
|  key | 生成map的key（注意key是数组中的某个属性，类型是number或string）  | 无 |

* redirect 页面跳转

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| url | 跳转URL  | 无 | 
* encodeHTML 将html字符转化成转义字符

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| source | html源  | 无 |  
* isEmpty 判断一个对象是否为空对象

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| obj | 要判断的对象 | 无 |  

### middelware

| 名称 | 说明 | 备注 |
| --- | --- | --- |
|  access_permission | 业务权限判断 |  |
|  is_admin | 登录权限判断 |  |
| gzip | gzip压缩 |  |
| response_time | 请求所需时长 | 毫秒为单位 |
| webpack | 请求文件使用webpack处理 |  |

### util

| 名称 | 说明 | 备注 |
| --- | --- | --- |
| service | 基于axios的请求封装 |  |

 

### contact

* QQ: 516908542
* 微信：lixiaobin8878

### Example

See `/examples` for some simple examples.`(TODO)`

### License

[MIT](http://opensource.org/licenses/MIT)

