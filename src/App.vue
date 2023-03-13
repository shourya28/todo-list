<template>
    <div id="data">
        {{ info }}
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'


export default ({
    name: '#data',
    data: () => {
      info: String
    },
    mounted () {
      axios 
        .get('http://localhost:8000/todo/')
        .then(res => {
          this.info = JSON.stringify(res)
          console.log(res)
        })
        .catch(err=>console.log(err))
    }
  })
</script>

  