import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import './assets/main.css'

// axios.get('http://localhost:8000/todo')
//   .then(info=> this.data = info)
//   .catch(err=>console.log(err))

new Vue({
  render: (h)=>h(App),
}).$mount('#app')

