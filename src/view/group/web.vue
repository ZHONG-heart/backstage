<template>
  <div id="web">
      <VR/>
  </div>
</template>
<script>
import VR from '@/components/WebComponents/VR.vue'
export default {
  name:'web',
  components:{
      VR
  }
}
</script>
<style scoped>
#web{
    min-width: 1000px;
    max-width: 1200px;
    margin: auto;
    margin-top:10px;
}
</style>
