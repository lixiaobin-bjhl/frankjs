import Vue from 'vue'
import VoicePlayer from '../component/VoicePlayer.vue'

new Vue({
  el: '#app',
  render (h) {
    return (
      <voice-player seconds='60.12' url='http://file.gsxservice.com/17731219_jyacy0y8.mp3' />
    )
  },
  components: {
    VoicePlayer
  }
})
