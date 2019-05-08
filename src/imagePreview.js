import Vue from 'vue'
import ImagePreview from '../component/ImagePreview.vue'
import ImagePreviewItem from '../component/ImagePreviewItem.vue'

new Vue({
  el: '#app',
  data () {
    return {
      imgList: [
        {
          u: 'http://blogfile.ifeng.com/uploadfiles/blog_attachment/1308/75/10103075_13773099904967.jpg',
          w: 500,
          h: 365,
          c: 'img1'
        },
        {
          u: 'http://img.mp.itc.cn/upload/20170526/c6ae4bb96b3043be9d45fa5402a7f96c_th.jpg',
          w: 600,
          h: 336,
          c: 'img2'
        }
      ]
    }
  },
  render (h) {
    const items = this._l(this.imgList, (item, index) => {
      return (<image-preview-item img={item} />)
    })
    return (
      <image-preview>
        {items}
      </image-preview>
    )
  },
  components: {
    ImagePreview,
    ImagePreviewItem
  }
})
