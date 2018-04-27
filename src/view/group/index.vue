<template>
  <div id="indexBox">
        <div id="pcView">
          <TopHeader></TopHeader>
          <Sticky><navigation/></Sticky>
        </div>
        
        <router-view></router-view>
  </div>
</template>
<script>
import Sticky from '@/components/Sticky'
import TopHeader from '@/view/navibar/header';
import Navigation from '@/view/navibar/navigation';
export default {
  name:'IndexH',
  components:{
      TopHeader,
      Navigation,
      Sticky
  }
}
</script>
<style scoped>
#indexBox{
  min-width:1000px;
}
#pcView{
  /* max-width:1200px;
  margin:auto; */
}
</style>
