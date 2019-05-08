import Vue from 'vue'
import AudioPlayer from '../component/AudioPlayer.vue'

new Vue({
  el: '#app',
  render (h) {
    return (
      <audio-player seconds='1000' url='http://file.gsxservice.com/17731219_jyacy0y8.mp3' />
    )
  },
  components: {
    AudioPlayer
  }
})
