<template>
  <div id="archives">
      <p class="handleTitle">文章归档</p>
      <hr>
      <div id="archivesBox">
          <span :key="index" v-for="(item,index) in archiveArr">{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name:'archives',
  data(){
      return {
          archiveArr:['2018年04月','2018年03月','2018年02月','2018年01月','2017年12月','2017年11月','2017年10月','2017年09月','2017年08月','2017年07月','2017年06月','2017年05月','2017年04月']
      }
  }
}
</script>
<style scoped>
#archives{
    background: #fff;
    padding: 15px 10px;
}
#archives .handleTitle{
    font-size: 18px;
    height: 38px;
}
#archives hr{
    border:1px solid #080808;
}
#archivesBox{
    margin-top: 20px;
}
#archives span{
    padding: 4px 15px;
    margin: 5px 6px;
    border-radius: 3px;
    display: inline-block;
    background: #ff5e5c;
    color: #ffffff;
    cursor:crosshair;
}
#archives span:hover{
    background: #4a4a4a;
}
</style>
